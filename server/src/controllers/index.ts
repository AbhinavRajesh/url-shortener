import { urlsDB } from "../utils/index";
import { detaUrls, Fn } from "../types/types";

export const indexRoute: Fn = (_req, res) => {
  return res.status(200).json({
    success: true,
    message: "Working...",
  });
};

export const redirectRoute: Fn = async (req, res) => {
  try {
    const { slug } = req.params;
    const url = (await urlsDB.fetch({ slug: slug.toLowerCase() }).next())
      .value as unknown as detaUrls[];
    if (url.length > 0) {
      return res.redirect(301, url[0].url);
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
