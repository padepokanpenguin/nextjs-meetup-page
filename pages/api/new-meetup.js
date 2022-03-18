import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const { title, image, address, description } = data;
		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.mceon.mongodb.net/meetups?retryWrites=true&w=majority`
		);
		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ meessage: "Meetup inserted!" });
	}
}

export default handler;
