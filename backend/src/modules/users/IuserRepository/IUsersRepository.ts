import { IUsersDTO } from "@modules/users/dtos/IUsersDTO";
import { Users } from "../infra/typeorm/entities/users";


export interface IUsersRepository{
    create(data: IUsersDTO):Promise<Users>
    findByEmail(email: string):Promise<Users | undefined>
}