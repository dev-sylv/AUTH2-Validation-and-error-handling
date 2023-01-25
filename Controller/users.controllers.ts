import userModels from "../Models/users.models";

import bcrypt from "bcrypt";

import {Request, Response} from "express";

// create users:
export const createUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {name, email, password, stack, isAdmin} = req.body;
        const saltedPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltedPassword)
        const user = await userModels.create({
            name,
            email,
            password: hashedPassword,
            stack,
            isAdmin,
        })
        if(!user){
            return res.status(401).json({
                status: "Please fill in all required fields",
            })
        }
        return res.status(201).json({
            status: "Successfully created this user",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in creating new users",
            data: error
        })
    }
}

// login for users:
export const loginUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { email, password} = req.body;
        const user = await userModels.findOne({email});
        if (!email) {
            return res.status(400).json({
                status: "Please enter your email",
            })  
        }
        if (!password) {
            return res.status(400).json({
                status: "Please enter your password",
            }) 
        }
        if (!user) {
            return res.status(400).json({
                status: "User not found",
            }) 
        }
        return res.status(201).json({
                status: "Users Login Successful",
                data: user
            }) 
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in logging this user",
            data: error
        })
    }
}

// get all users:
export const getAllUsers = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const users = await userModels.find();
        return res.status(200).json({
            status: `Successfully got all ${users.length}(s)`,
            data: users
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in getting all users",
            data: error
        })
    }
}