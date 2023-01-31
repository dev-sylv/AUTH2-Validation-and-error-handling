import express, { Application } from "express";
import morgan from "morgan";
import userRouter from "./Routes/user.routes";
import productRouter from "./Routes/products.routes"

export const AppConfig = (app: Application) =>{
    // middlewares 
    app.use(express.json());
    // app.use(cors())
    app.use(morgan("dev"));

    // Routes for our application:
    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter)
}