import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI, async (err)=>{
        if(err){
            console.log(err);
        }
    });
}

export default connectDB;