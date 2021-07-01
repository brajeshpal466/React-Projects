import express from 'express'
import router from './router/consumer.js';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({path:"config.env"});
const PORT = process.env.PORT
// instance of express
const app = express();
app.use(express.json()) 
app.use(cors({credentials:true,origin:['http://localhost:3000/','http://localhost:3002/']}
    ))
//middlewear
// data comes in request will be convert check there is in json form 

app.use(router);
import "./database/db.js"
app.listen(PORT,()=>{
    console.log(`server is running the port of ${PORT}`)
})