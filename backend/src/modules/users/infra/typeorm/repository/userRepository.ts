import { getRepository } from 'typeorm'
import { Users } from '../entities/users';

import { IUsersRepository } from "@modules/users/IuserRepository/IUsersRepository";
import { IUsersDTO } from "@modules/users/dtos/IUsersDTO";

export class UserRepository implements IUsersRepository{
  public async create({ email,name, password }:IUsersDTO):Promise<Users>{
    const useRepository=getRepository(Users)
    const createdUser= useRepository.create({
        email,
        name,
        password
    })

     await useRepository.save(createdUser)
     return createdUser
   }

   public async findByEmail(email:string): Promise<Users | undefined>{
    const useRepository=getRepository(Users)
      const user=useRepository.findOne({
          where:{
            email:email
          }
      })
      return user
  }
}