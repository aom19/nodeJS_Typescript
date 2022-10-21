import express from "express";
import connect from "../utils/connect";
import config from "config";
import logger from "../utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port: number = config.get<number>("port");
const app = express();
app.use(express.json());
app.use(deserializeUser);

app.listen(port, async () => {
  await connect();
  console.info("server running on port " + port);
  routes(app);
});
