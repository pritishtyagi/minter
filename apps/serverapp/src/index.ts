import express, { Request, Response, NextFunction } from 'express';
import dotEnv from "dotenv";
//------------------------------------------------------imports-----------------------------------------------------


//Loads .env file contents into process.env.
dotEnv.config();


//Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express();
const port = process.env.PORT;


app.get("/", (req:Request,res:Response,next:NextFunction):void=>{
  res.json({
    message: "Server App"
  });
})

app.listen(port, () => {
  console.log(`Listening on the port number ${port}.`);
});