import Mood from "../../../models/mood";
import connectDB from "../../../utils/connectDB";

export default async function getMood(req, res) {
    try {
        await connectDB();

        const { email, date} = req.body;
        const item = await Mood.findOne({email,date});
        res.json({item});
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}