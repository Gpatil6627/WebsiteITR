import mongoose from "mongoose";

const connectDB=async(req,res)=>{
    try{
            mongoose.connection.on("connected",()=>{
                console.log("Mongodb Connected");           
            })
            mongoose.connect(`mongodb+srv://Anushka:3333@yogatattva.pyrwidl.mongodb.net/`)
    }
    catch(error)
    {
        console.log(error);
    }
}
export default connectDB;