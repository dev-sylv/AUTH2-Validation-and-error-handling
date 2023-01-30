import express, { Application } from "express";
import morgan from "morgan";
import router from "./Routes/user.routes";

export const AppConfig = (app: Application) =>{
    // middlewares 
    app.use(express.json());
    // app.use(cors())
    app.use(morgan("dev"));

    // Routes for our application:
    app.use("api/users", router)
}