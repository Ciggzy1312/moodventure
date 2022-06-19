import Mood from "../../../models/mood";
import connectDB from "../../../utils/connectDB";

export default async function getMoods(req, res){
    try {
        await connectDB();

        const {email} = req.body;
        const items = await Mood.find({email});
        res.json({items});
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}