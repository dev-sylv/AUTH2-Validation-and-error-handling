import joi from "joi";

import { AppError, HttpCodes } from "../utils/AppError";

import { NextFunction } from "express";

// Central Validation function

export const validator = async(
    schemaName: joi.ObjectSchema,
    body: object,
    next: NextFunction
): Promise<void> =>{
    const value = await schemaName.validate(body, {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    });

    try {
        value.error ?  next(
            new AppError({
                httpCode: HttpCodes.BAD_REQUEST,
                message: value.error.details[0].message
            })
        ) : next();
    } catch (error) {
        console.log(error)
    }
}