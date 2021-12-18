
import { ITokenProvider } from "../model/ITokenProvider"; 
import { Users } from '@modules/users/infra/typeorm/entities/users'


export class FakeTokenProvider implements ITokenProvider{
    generateToken(user:Users):string{
        const token=user.email

        return token
    }
}