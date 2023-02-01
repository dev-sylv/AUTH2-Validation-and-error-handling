import mongoose from "mongoose";

const DB_URL: string = "mongodb://localhost/E-commerce"

export const DBconnect = async(): Promise<void> =>{
    try {
        const connect = await mongoose.connect(DB_URL);
        console.log(`DB is connected to ${connect.connection.host}`)
    } catch (error) {
        console.log(`Couldn't connect to ${DB_URL}`);
        process.exit(1);
    }
}