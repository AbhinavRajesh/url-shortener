import { Router } from "express";
import { createUrl, getUrlDetails } from "../controllers/urls";

const router = Router();

router.post("/", createUrl);
router.get("/:slug", getUrlDetails);

export default router;
