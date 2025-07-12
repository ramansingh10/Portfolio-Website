import express from 'express'
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv'
import cors from 'cors'
import detailsRouter from './router/detailsRouter.js';


const app= express();
dotenv.config({path:'./config/config.env'})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:[process.env.FORNTEND_URL],
    methods:["POST"],
    Credentials:true
}))

app.use('/api/v1/details', detailsRouter)

dbConnection()

app.listen(process.env.PORT,()=>{
    console.log("Server runnig on port 3000")
})