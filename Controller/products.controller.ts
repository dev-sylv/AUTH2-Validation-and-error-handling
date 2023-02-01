import productModel from "../Models/products.models";

import { Request, Response, NextFunction } from "express";

import wishListModel from "../Models/wishlist.models";

import {productData} from "../Models/AllInterfaces";
import { asyncHandler } from "../utils/AsyncHandler";

import { AppError, HttpCodes } from "../utils/AppError";
import userModel from "../Models/users.models";
import mongoose from "mongoose";


// Enter new products:
export const EnterProducts = asyncHandler(
    async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
        const {name, category, price, purchased, wishList, not_in_stock} = req.body;

        const user = await userModel.findById(req.params.userID);

        const newProducts = await productModel.create({
            name,
            category,
            price,
            wishList,
            not_in_stock
        });
        
        await user?.products.push(new mongoose.Types.ObjectId(newProducts._id))

        user?.save();

        if (!newProducts) {
            next(
                new AppError({
                    message: "Unable to create products",
                    httpCode: HttpCodes.SERVICE_UNAVAILABLE,
                    isOperational: true,
                    name: AppError.name
                })
            )
        }
        return res.status(201).json({
            message: "Successfully added more products",
            data: newProducts
        })
    }
)


// Get all products:
export const getAllProducts = asyncHandler(
    async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
        const products = await productModel.find().sort({createdAt: -1});

        if (!products) {
            next(
                new AppError({
                    name: "Unable to find products",
                    httpCode: HttpCodes.NOT_FOUND,
                    message: AppError.name,
                    isOperational: true
                })
            )
        }

        return res.status(200).json({
            message: `Successfully got all ${products.length} products`,
            data: products
        })
    }
);


// Get products in different categories:
export const getProductsByCategory = asyncHandler(
    async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
        const {category} = req.body;
        const products = await productModel.findOne({category}).find();

        if (!products) {
            next(
                new AppError({
                    name: "Unable to find products",
                    httpCode: HttpCodes.NOT_FOUND,
                    message: AppError.name,
                    isOperational: true
                })
            )
        }

        return res.status(200).json({
            message: `Successfully got all ${products.length} product(s) in the ${category} category aspects`,
            data: products
        })
    }
);

// Delete all products:
export const deleteAllProducts = asyncHandler(
    async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
        const deleteProducts = await productModel.deleteMany();

        if (!deleteProducts) {
            next(
                new AppError({
                    name: "Unable to delete all products",
                    httpCode: HttpCodes.SERVICE_UNAVAILABLE,
                    message: AppError.name,
                    isOperational: true
                })
            )
        }

        return res.status(200).json({
            message: `Successfully deleted all ${productModel.length} product(S)`,
            data: deleteProducts
        })
    }
);

// Update Products purchased and in stock:
export const updateProducts = asyncHandler(
    async(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> =>{
        const { purchased, not_in_stock } = req.body;

        const updates = await productModel.findByIdAndUpdate(
            req.params.productID,
            {purchased, not_in_stock},
            {new: true}
        )

        if (!updates) {
            asyncHandler(
                next(
                    new AppError({
                        name: "Couldn't update",
                        message: AppError.name,
                        isOperational: true,
                        httpCode: HttpCodes.UNAUTHORIZED
                    })
                )
            )
        }
        return res.status(201).json({
            message: "Successfully updated products",
            data: updates
        })
    }
   
)