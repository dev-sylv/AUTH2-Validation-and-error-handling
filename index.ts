import express, { Application } from "express"
import { AppConfig } from "./app";
import { DBconnect } from "./Config/db";


const port : number = 5000

const app: Application =  express();

process.on("unhandledException", (err: Error) =>{
    console.log("Uncaught exception, server shutting down");
    console.log(err.name, err.message, err.stack);
    process.exit(1);
})

AppConfig(app)
DBconnect()

 const server = app.listen(port , ()=>{
    console.log("")
    console.log(`Server is up on port ${port}`)
});

process.on("unhandledRejection", (reason: any) => {
    console.log('Unhandled rejection, server is shutting down');
    console.log(reason.message, reason);
    server.close(() =>{
        process.exit(1);
    });
});


