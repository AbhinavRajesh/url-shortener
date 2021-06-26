import { nanoid } from "nanoid";
import { urlsDB } from "../utils/index";
import * as yup from "yup";

import { Fn, detaUrls } from "../types/types";

interface CreateUrlBody {
  slug: string;
  url: string;
  uid: string;
}

// Input Validation
const schema = yup.object().shape({
  slug: yup
    .string()
    .trim()
    .matches(/[\w\-]/i),
  url: yup.string().trim().url().required(),
  uid: yup.string().trim().required(),
});

// DB
export const createUrl: Fn = async (req, res) => {
  const { slug, url, uid }: CreateUrlBody = req.body;
  try {
    const newUrl = {
      slug,
      url,
      uid,
    };
    await schema.validate(newUrl);
    if (!slug) {
      newUrl.slug = nanoid(6);
    }
    newUrl.slug = slug.toLowerCase();
    const existing = (await urlsDB?.fetch({ slug }).next())
      .value as unknown as detaUrls[];
    if (existing.length > 0) {
      throw new Error("Slug already in use");
    } else {
      await urlsDB.put(newUrl);
      return res.status(200).json({
        success: true,
        slug,
        url,
      });
    }
  } catch (error) {
    return res.status(error.status ? error.status : 500).json({
      success: false,
      message: error.message ? error.message : "Internal server error",
    });
  }
};

export const getUrlDetails: Fn = async (req, res) => {
  try {
    const { slug } = req.params;
    const url = (await urlsDB.fetch({ slug: slug.toLowerCase() }).next())
      .value as unknown as detaUrls[];
    if (url.length > 0) {
      return res.status(200).json(url[0]);
    } else {
      throw new Error("Invalid slug");
    }
  } catch (err) {
    if (err.message.includes("Invalid slug"))
      return res.status(404).json({
        success: false,
        error: err.message,
      });
    else
      return res.status(500).json({
        success: false,
        error: "Some error occured. Please try again later",
      });
  }
};
