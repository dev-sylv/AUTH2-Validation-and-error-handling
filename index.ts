import express from "express";
import { Application } from "express-serve-static-core";
import { AppConfig } from "./app";
import DBconnect from "./Config/db";

const port: number = 3030;

const app: Application = express();

DBconnect()
AppConfig(app)

app.listen(port, () =>{
    console.log("Listening to my port on ",port)
})