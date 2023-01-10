import mongoose from "mongoose";

mongoose.set("strictQuery", false);

(async () => {
  try {
    const db = await mongoose.connect(
      process.env.MONGO_URI,
      {},
      () => console.log("DB connected")
    )
  }
  catch (e) {
    console.log(e)
  }
})()
