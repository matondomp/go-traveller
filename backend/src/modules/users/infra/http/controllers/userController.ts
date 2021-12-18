import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserService } from '@modules/users/service/createUsersService'

export class UserController{



    public async create(request:Request, response:Response):Promise<Response>{
        const { email, name, password  }=request.body

        const createUserInstace= container.resolve(CreateUserService)
        const user=createUserInstace.execute({ 
                email,
                name,
                password
        })
        return response.json(user) 
    }
}