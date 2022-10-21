import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
}

export default connect;
