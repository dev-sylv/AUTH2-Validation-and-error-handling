import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./Routes/user.routes";
import productRouter from "./Routes/products.routes"
import { AppError, HttpCodes } from "./utils/AppError";
import { errorHandler } from "./Middleware/errorHandling";

export const AppConfig = (app: Application) =>{
    // middlewares 
    app.use(express.json());
    app.use(cors());
    app.use(morgan("dev"));

    // Routes for our application:
    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter);

    app.all("*", (
        req: Request,
        res: Response,
        next: NextFunction
    ) =>{
        next(
            new AppError({
                message: `This route ${req.originalUrl} does not exist`,
                httpCode: HttpCodes.NOT_FOUND,
                isOperational: true
            })
        );
    });

    // Error handlers should be the last in your app:
    app.use(errorHandler);
}