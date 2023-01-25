import cors from "cors";
import express, { Application } from "express";

import morgan from "morgan";

export function AppConfig(app: Application) {
    app.use(cors());
    app.use(express.json());
    app.use(morgan("dev"));

    // Routes for my application:
    // app.use("/api/auth", router)
}