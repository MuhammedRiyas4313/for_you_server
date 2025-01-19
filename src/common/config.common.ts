import * as dotenv from "dotenv";
import { parseEnv, port, z } from "znv";
dotenv.config({ override: true });

dotenv.config({ path: ".env.local", override: true });

export const CONFIG = parseEnv(process.env, {
  URL: z.string(),
  PORT: port().default(3000),
  MONGOURI: z.string(),
  JWT_ACCESS_TOKEN_SECRET: z.string(),
});

export const API_PATHS = [
  `./src/v1/routes/user.routes.ts`,
  "./dist/v1/routes/user.routes.js",
  `/src/v1/routes/request.routes.ts`,
  "./dist/v1/routes/request.routes.js",
  `/src/v1/routes/country.routes.ts`,
  "./dist/v1/routes/country.routes.js",
  `/src/v1/routes/region.routes.ts`,
  "./dist/v1/routes/region.routes.js",
  `/src/v1/routes/state.routes.ts`,
  "./dist/v1/routes/state.routes.js",
  `/src/v1/routes/town.routes.ts`,
  "./dist/v1/routes/town.routes.js",
  `/src/v1/routes/beat.routes.ts`,
  "./dist/v1/routes/beat.routes.js",
];
