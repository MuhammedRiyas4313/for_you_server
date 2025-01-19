import express from "express";
import { IndexGet } from "v1/controllers/index.controller";

const router = express.Router();

router.get("/", IndexGet);

export default router;
