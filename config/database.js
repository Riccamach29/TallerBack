import mongoose from "mongoose";


let url = process.env.URI_MONGO
console.log(url);


async function connectDB() {
    try {
       await mongoose.connect(url);
       console.log("Connected to the database");
       
    } catch (error) {
        console.log(error);
    }
}

connectDB();