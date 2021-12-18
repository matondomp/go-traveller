import { sign } from "jsonwebtoken";

import { ITokenProvider } from "../model/ITokenProvider"; 
import { Users } from '@modules/users/infra/typeorm/entities/users'
import { TokenConfig } from '@config/token'


export class TokenProvider implements ITokenProvider{
  
    generateToken(user:Users):string{

       const { expiresIn, security } =TokenConfig
       
        const token= sign({},security,{
            subject:user.id,
            expiresIn
        })

        return token
    }
}