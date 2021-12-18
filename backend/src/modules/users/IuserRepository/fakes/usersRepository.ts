import { v4 } from 'uuid'

import { IUsersRepository } from "@modules/users/IuserRepository/IUsersRepository";
import { IUsersDTO } from "@modules/users/dtos/IUsersDTO";
import { Users } from "@modules/users/infra/typeorm/entities/users";

export class UsersRepository implements IUsersRepository{

    private arrayOfUsers:Users[]=[]

    public async create(data:IUsersDTO):Promise<Users>{
        const user=new Users()
        Object.assign(user,{ id:v4(),...data })
        this.arrayOfUsers.push(user)
         return user
    }
    public async findByEmail(email: string):Promise<Users | undefined>{
       return this.arrayOfUsers.find(user=>user.email===email)
    }
}