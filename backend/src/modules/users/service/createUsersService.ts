
import 'reflect-metadata'

import { inject,injectable } from 'tsyringe'
import { IUsersRepository } from "../IuserRepository/IUsersRepository" 
import { IUsersDTO } from "../dtos/IUsersDTO"
import { IhashProviders } from '@modules/users/infra/provider/hashProvider/model/IhashProvider'
import { AppError } from '@shared/appError/appError'

@injectable()
export class CreateUserService{
    
    constructor(
         @inject("UserRepository")
         private userRepository: IUsersRepository,

         @inject("HashProvider")
         private hashProviders: IhashProviders
        ){}

    public async execute({ name, email, password }:IUsersDTO){
        const findUsersByEmail=await this.userRepository.findByEmail(email)
        const hashedPassword=await this.hashProviders.generateHash(password)
        
        if(findUsersByEmail){
           throw new AppError("this user just exist!",400)
        }
        const userDatas=await this.userRepository.create({
             name,
             email,
             password:hashedPassword
        }) 
    
        return userDatas
    }
}