import createError from "http-errors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import v1Router from "./v1/router.v1";

import { errorHandler } from "./middlewares/errorHandler.middleware";
import { CONFIG } from "common/config.common";
import { seedData } from "seeder/seeder";
import { setUserAndUserObj } from "middlewares/auth.middleware";

const app = express();

/**
 * @description Swagger/OpenAi Config
 */

// const options = {
//   definition: {
//     openapi: "3.0.1",
//     info: {
//       title: "CREANDO",
//       version: "1.0.0",
//     },
//     schemes: ["http", "https"],
//     servers: [{ url: CONFIG.URL }],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },
//     security: [
//       {
//         bearerAuth: [],
//       },
//     ],
//   },
//   apis: API_PATHS,
// };

// const swaggerSpec = swaggerJSDoc(options);

/**
 * @description mongo connection and seeder
 */

mongoose
  .connect(CONFIG.MONGOURI)
  .then(() => console.log("DB Connected to ", CONFIG.MONGOURI))
  .catch((err) => console.error(err));

mongoose.set("debug", true);
mongoose.set("allowDiskUse", true);

seedData();

/**
 *@description express configuration
 */

app.use(cors());
app.set("trust proxy", true);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(setUserAndUserObj);
app.use(logger("dev"));
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "public")));

/**
 * v1 Router
 */

app.get("/favicon.ico", (req: Request, res: Response, next: NextFunction) => res.status(200).json("no favicon"));
app.use("/v1", v1Router);

/**
 * 404 error handler
 */

app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * general error handler
 */

app.use(errorHandler);

export default app;
