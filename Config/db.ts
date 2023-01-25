import mongoose from "mongoose";

const DB_URL: string = "mongodb://localhost/auth2class";

const DBconnect = async(): Promise<void> =>{
    try {
        const connect = await mongoose.connect(DB_URL);
        console.log(`DB is connected to ${connect.connection.host}`)
    } catch (error) {
        console.log("An error occured in connecting db", error)
    }
}

export default DBconnect