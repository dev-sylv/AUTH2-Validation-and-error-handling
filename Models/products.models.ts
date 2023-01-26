import mongoose, {Schema, Document, model } from "mongoose";

interface products{
    productname: string,
    quantity: string,
    price: string,
    shopname: string
};

interface iPRODUCTS extends products, Document{};

const productSchema = new Schema({
    productname: {
        type: String,
        required: [true, "Enter the product name"]
    },
    quantity: {
        type: String,
        required: [true, "Enter product Quantity"]
    },
    price: {
        type: String,
        required: [true, "Enter Product Price"]
    },
    shop: {
        type: String,
        required: [true, "What shop are you buying products from?"]
    }
}, {timestamps: true});

const productsModel = model<iPRODUCTS>("productsCollections", productSchema)

export default productsModel;