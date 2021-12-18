import { IaddressDTO } from '../dtos/Iadress'
import { Address }  from '@modules/addresses/infra/typeorm/entities/address'

export interface Iaddress{
    create(data:IaddressDTO):Promise<Address>
    findByNumber(number?:string):Promise<Address | undefined>
}