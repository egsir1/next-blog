import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim().length === 0 ||
      !message ||
      message.trim().length === 0
    ) {
      res.status(422).json({ message: "Invalid input!!!" });
      return;
    }

    //Store it in a database

    const newMessage = {
      email,
      name,
      message,
    };
    // "mongodb+srv://Sam:U00nqTFk3mNhBKFP@my-blog.nzaxqc0.mongodb.net/my-next-blog?retryWrites=true&w=majority"

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.nzaxqc0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://Sam:U00nqTFk3mNhBKFP@my-blog.nzaxqc0.mongodb.net/my-next-blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message || "Something went wrong" });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Stroing message failed!" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });

    console.log(newMessage);

    res.status(201).json({ message: "Successfully stored!!!" });
  }
}
export default handler;
