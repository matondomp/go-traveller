import 'reflect-metadata'
import { AppError } from '@shared/appError/appError';
import { injectable,inject } from 'tsyringe'

import { IUsersDTO } from "../dtos/IUsersDTO";
import { IhashProviders } from '../infra/provider/hashProvider/model/IhashProvider';
import { IUsersRepository } from "../IuserRepository/IUsersRepository";
import { Users } from '../infra/typeorm/entities/users';
import { ITokenProvider } from '@modules/users/infra/provider/tokenProvider/model/ITokenProvider'

interface IUser{
    user:Users
    token:string
}

@injectable()
export class SessionUserServices{
    
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository,

        @inject("HashProvider")
        private hashProviders: IhashProviders,

        @inject("TokenProvider")
        private tokenProvider: ITokenProvider
       ){}
      
    
    public async execute({ email, password }:IUsersDTO):Promise<IUser>{

        const user=await this.userRepository.findByEmail(email)
   
        
        if(!user){
           throw new AppError("password or email it's wrong, try again",400)
          }
 
      const hashedComparison= await this.hashProviders.compareHash(password,String(user.password))

      if(!hashedComparison){
        throw new AppError("password or email it's wrong, try again",400)
      } 

      delete user.password

      const token =this.tokenProvider.generateToken(user)
 
       return { user,token}
    }
}