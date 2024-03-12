// require ('dotenv').config({path: './env'})
 
//we hve to config it also
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();

