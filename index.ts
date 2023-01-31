import express, { Application } from "express"
import { AppConfig } from "./app";
import { DBconnect } from "./Config/db";


const port : number = 5000

const app: Application =  express();

AppConfig(app)
DBconnect()

app.listen(port , ()=>{
    console.log("")
    console.log(`Server is up on port ${port}`)
})


