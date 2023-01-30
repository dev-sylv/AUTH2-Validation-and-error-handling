import mongoose from "mongoose";
import { wishListData } from "./AllInterfaces";

interface wishList extends wishListData , mongoose.Document{}


const wishListSchema = new mongoose.Schema({
    name : {
        type: String , 
        required : [true , "please enter the product name"]
    }
},{timestamps : true})

const wishListModel = mongoose.model<wishList>("WishList Collections" , wishListSchema)

export default wishListModel