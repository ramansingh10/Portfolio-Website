import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "PORTFOLIO",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(`Some eror occured ${err}`);
    });
};
