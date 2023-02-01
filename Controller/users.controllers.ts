import userModel from "../Models/users.models";
import productModel from "../Models/products.models";
import { Request , Response , NextFunction} from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { AppError, HttpCodes } from "../utils/AppError";
import { userData } from "../Models/AllInterfaces";
import bcrypt from "bcrypt"
import wishListModel from "../Models/wishlist.models";

//create user 

export const CreateUser = asyncHandler(
    async(req:Request<{} , {} ,userData > , res:Response , next:NextFunction):Promise<Response> =>{
        const {name , email , password , wishList , products} = req.body;

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt);

        const AllProducts = await productModel.find();

        const newUser = await userModel.create({
            name ,
            email , 
            password: hashedPassword ,
            wishList,
            products: AllProducts,
        })
        if(!newUser){
            next(
                new AppError({
                    message : "unable to create user",
                    httpCode: HttpCodes.BAD_REQUEST,
                    name : AppError.name
        
        })
)

        }
        return res.status(201).json({
            message : "User Created successfully",
            data : newUser
        })
    }
)


// get all users

export const GetAllUsers = asyncHandler(
    async(req: Request<{}, {}, userData>, res: Response, next: NextFunction): Promise<Response> =>{
        const users = await userModel.find().populate([
            {
                path: "products",
                options: {
                    sort: {
                        createdAt: -1
                    }
                }
            }
        ]);
        if (!users) {
            next(
                new AppError({
                    message: "No user found",
                    httpCode: HttpCodes.NOT_FOUND,
                    name: AppError.name
                })
            )
        }
        return res.status(200).json({
            message: `Sucessfully got all ${users.length} user(s)`,
            data: users
        })
    }
)

// Login:

export const LoginUsers = asyncHandler(
    async(req: Request<{}, {}, userData>, res: Response, next: NextFunction): Promise<Response> =>{
        const {email} = req.body;

        if (!email) {
            next(
                new AppError({
                    message: "Please enter an email",
                    httpCode: HttpCodes.NOT_FOUND,
                    name: AppError.name
                })
            )
        }

        const user = await userModel.findOne({email});
        if (!user) {
            next(
                new AppError({
                    message: "User does not exist, please sign up",
                    httpCode: HttpCodes.NOT_FOUND,
                    name: AppError.name
                })
            )
        }

        return res.status(201).json({
            message: `User login successful`,
            data: `Welcome ${user?.name}`
        })
    }
)

//  Delete all products:
export const deleteAllUsers = asyncHandler(
    async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
        const deleteUsers = await userModel.deleteMany();

        if (!deleteUsers) {
            next(
                new AppError({
                    name: "Unable to delete all users",
                    httpCode: HttpCodes.SERVICE_UNAVAILABLE,
                    message: AppError.name,
                    isOperational: true
                })
            )
        }

        return res.status(200).json({
            message: `Successfully deleted all ${userModel.length} product(S)`,
            data: deleteUsers
        })
    }
);

// Get one user:

export const GetOneUser = asyncHandler(
    async(req: Request, res: Response, next: NextFunction): Promise<Response> =>{
        const users = await userModel.findById(req.params.userID);
        if (!users) {
            next(
                new AppError({
                    message: "No user found",
                    httpCode: HttpCodes.NOT_FOUND,
                    name: AppError.name
                })
            )
        }
        return res.status(200).json({
            message: `Sucessfully got this user. Welcome ${users?.name}`,
            data: users
        })
    }
)