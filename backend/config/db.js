import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://alcapone12:alcapone123@alifarhodov.mscki.mongodb.net/steak-house-project').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
