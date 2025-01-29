import path from "path";
import { config } from "dotenv";

config({ path: path.join(process.cwd(), ".env") });

export default {
  jwt: {
    secret: process.env.JWT_SIGN,
  },
};
