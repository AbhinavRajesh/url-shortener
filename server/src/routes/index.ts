import { Router } from "express";
import { indexRoute, redirectRoute } from "../controllers/index";

const router = Router();

router.get("/", indexRoute);
router.get("/:slug", redirectRoute);

export default router;
