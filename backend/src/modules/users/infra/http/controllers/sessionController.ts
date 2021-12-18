
import { Request,Response } from 'express'
import { container } from "tsyringe"

import { SessionUserServices } from '@modules/users/service/sessionUserService'

export class SessionController{

   public async auth(request:Request, response:Response):Promise<Response>{

    const { email, password } =request.body

    const session=container.resolve(SessionUserServices) 

    const getValue= await session.execute({
         email,
         password
        })

    return  response.json({getValue})
   }

}