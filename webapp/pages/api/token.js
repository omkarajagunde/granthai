// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === "POST") {
		console.log("Incoming webhook from Tally -- ", JSON.stringify(req.body));
		res.status(200).json({ name: "John Doe" });
	}
}
