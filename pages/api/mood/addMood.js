import Mood from "../../../models/mood";
import connectDB from "../../../utils/connectDB";

export default async function addMood(req, res) {
    try {
        await connectDB();

        const { email, date, mood, notes } = req.body;
        const item = await Mood.findOne({ email, date });

        if (item) {
            const item = await Mood.findOneAndUpdate({ email, date }, { '$set': { note: notes, date, mood } });
            res.json({ item })
        } else {
            const item = await Mood.create({ email, note: notes, date, mood });
            res.json({ item })
        }
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}