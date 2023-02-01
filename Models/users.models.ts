import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

import { userData } from "./AllInterfaces";

interface user extends userData , mongoose.Document{}


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "please  enter your name"],
        trim : true
    },
    email : {
        type : String,
        required :  [true , "please enter a valid email"],
        lowercase : true,
        unique : true ,
        trim : true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password : {
        type : String,
        minlength : 8,
        required : [true , "please enter your password"]
    },
    wishList :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "WishList Collections"
        }
    ],
    products :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "products Collections"
        }
    ]
} , {timestamps : true})

const userModel = mongoose.model<user>("user collections" , userSchema)


export default userModel