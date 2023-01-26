import { Request, Response } from "express";

import shopModels from "../Models/shop.models";

import productsModel from "../Models/products.models";

// create shops: 
export const createNewShops = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { shopname} = req.body;
        const shop = await shopModels.create({
            shopname,
        })
        return res.status(201).json({
            status: "Successfully created a new shop",
            data: shop
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in creating new shops",
            data: error
        })
    }
}

// delete shops:
export const deleteShops = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const shop = await shopModels.findByIdAndRemove(req.params.shopID);
        return res.status(200).json({
            status: `Successfully deleted this shop`,
            data: shop
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in deleting this shop",
            data: error
        })
    }
}

// get all shops:
export const AllShops = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const shops = await shopModels.find().sort({createdAt: -1});
        return res.status(200).json({
            status: `Got all ${shops.length}(s) shops with products in it`,
            data: shops
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured while trying to get all shops",
            data: error
        })
    }
}

// get one shop:
export const OneShop = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const shop = await shopModels.findById(req.params.shopID);
        return res.status(200).json({
            status: `Got this shop with products in it`,
            data: shop
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in getting this shop",
            data: error
        })
    }
}