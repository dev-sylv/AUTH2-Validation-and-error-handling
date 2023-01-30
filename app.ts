import express, { Application } from "express";
import morgan from "morgan";

export const AppConfig = (app: Application) =>{
    // middlewares 
    app.use(express.json());
    // app.use(cors())
    app.use(morgan("dev"));

    // Routes for our application:
}