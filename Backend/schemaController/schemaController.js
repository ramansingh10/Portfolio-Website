import { details } from "../databaseSchema/databaseSchema.js";

export const information = async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  //validate field
  if (!name || !email || !subject || !message) {
    return console.log("Error");
  }
  try {
    //create details
    await details.create({ name, email, subject, message });
    res.send("Detailed send successfully");
  } catch (error) {
    res.send("Some error occured");
  }
};
