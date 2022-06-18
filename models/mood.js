import { Schema, model, models } from 'mongoose';

const moodSchema = new Schema({
    email: {
        type: String,
    },
    date: {
        type: String,
    },
    mood: {
        type: Number,
    },
    note: {
        type: String,
    },
});

const Mood = models.Mood || model('Mood', moodSchema);

export default Mood;