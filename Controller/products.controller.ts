import productsModel from "../Models/products.models";

import shopModels from "../Models/shop.models";

import { Request, Response } from "express";
import mongoose, { Schema } from "mongoose";

// create new products:
export const createNewProducts = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {productname, quantity, price, shopname} = req.body;
        const shop = await shopModels.findById(req.params.shopID);
        const products = await productsModel.create({
            productname,
            quantity,
            price,
            shopname: shop?.shopname,
        })
        shop?.products.push(new mongoose.Types.ObjectId(products._id))
        shop?.save
        return res.status(201).json({
            status: "Successfully created this product",
            data: products
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in creating new products",
            data: error
        })
    }
}

// get all products: 
export const AllProducts = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const products = await productsModel.find();
        return res.status(200).json({
            status: `Successfully got all ${products.length} products`,
            data: products
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in getting all products",
            data: error
        })
    }
}

// get one products:
export const OneProduct = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const product = await productsModel.findById(req.params.productID);
        return res.status(200).json({
            status: "Successfully got this product",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in getting this product",
            data: error
        })
    }
}

// delete a product:
export const deleteProducts = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const product = await productsModel.findByIdAndRemove(req.params.productID);
        return res.status(200).json({
            status: "Successfully deleted this product",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in deleting this product",
            data: error
        })
    }
}