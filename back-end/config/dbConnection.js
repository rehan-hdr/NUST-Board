import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DATABASE CONNECTED: ${connect.connection.name}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;