const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

export default {
  port: 1337,
  dbUri: `mongodb+srv://${process.env.DB_DATABASE}:${process.env.DB_PASSWORD}@cluster0.ku5rn.mongodb.net/?retryWrites=true&w=majority`,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "30d",
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};
