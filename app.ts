import cors from "cors";
import express, { Application } from "express";

import morgan from "morgan";
import shoprouter from "./Routes/shops.routes";
import productrouter from "./Routes/products.routes"

export function AppConfig(app: Application) {
    app.use(cors());
    app.use(express.json());
    app.use(morgan("dev"));

    // Routes for my application:
    app.use("/api/shops", shoprouter)
    app.use("/api/products", productrouter)
}