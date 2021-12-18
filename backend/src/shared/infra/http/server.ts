import 'reflect-metadata'
import 'express-async-errors'


import express, { Request,Response, NextFunction } from 'express'
import cors from 'cors'
import { AppError } from '@shared/appError/appError'
import { route } from './route'
import path from 'path'

import '../typeorm'
import '@shared/container'


const app=express()



app.use(cors())
app.use(express.json())
app.use("/",route)

app.use('/uploads',
express.static(path.resolve(__dirname,'..','..','..','..','tmp')))

 app.use((error:Error, request:Request, response:Response, next:NextFunction)=>{

    if(error instanceof AppError){
       return response.status(error.statusCode).json({
         error:"error",
         message:error.message
       })
   }
    return  response.status(500).json({
          error:"error",
          message:"internal server error"
    })
})   

app.listen(3335,()=>{
      console.log("runing 🚀️🚀️🚀️🚀️")
})