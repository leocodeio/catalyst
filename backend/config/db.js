import mongoose from "mongoose";
import {} from 'dotenv/config'

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connection sucess");
  }catch(err){
    console.log("err occured while connecting",err);
  }
}

export default connectDB;