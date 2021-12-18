
import { Users } from '@modules/users/infra/typeorm/entities/users';

export interface ITokenProvider{
   generateToken(user:Users):string
}