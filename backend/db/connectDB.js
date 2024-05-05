import mongoose from "mongoose";

export async function connectDB(params) {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Thy mistake doneth presented: ${error.message}`);
        process.exit;
    }
}