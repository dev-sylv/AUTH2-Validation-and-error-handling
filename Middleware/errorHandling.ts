import { NextFunction, Request, Response } from "express";

import { AppError, HttpCodes } from "../utils/AppError";

const devErrorHandler = (err: AppError, res: Response) =>{
    res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
        status: err.httpCode,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    devErrorHandler(err, res);
}