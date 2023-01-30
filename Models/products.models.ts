import mongoose from "mongoose";
import { productData } from "./AllInterfaces";

interface products extends productData, mongoose.Document{};

const productSchema = new mongoose.Schema<productData>({
    name: {
        type: String,
        required: [true, "Please enter Product Name"]
    },
    category: {
        type: String,
        required: [true, "Please enter product category e.g Utensils, Laptops"]
    },
    price: {
        type: String,
        required: [true, "Please enter your product price"]
    },
    not_in_stock: {
        type: Boolean,
        required: [true, "Is the product available"]
    },
    purchased: {
        type: Boolean,
        default: false
    },
    wishList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "WishList Collections"
        }
    ]

},{timestamps : true});

const productModel = mongoose.model<products>("products Collections", productSchema);

export default productModel;