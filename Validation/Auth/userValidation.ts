import { userSchema } from "./userSchema";

import {validator} from "../validator";

import { RequestHandler, NextFunction, Request, Response } from "express";

// Validation middleware functions:

export const registerValidation: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    validator(userSchema.register, req.body, next)
};

export const loginValidation: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    validator(userSchema.login, req.body, next)
};