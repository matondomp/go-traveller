import { ICityDTO } from '../dtos/ICityDTO'
import { City }  from '@modules/cities/infra/typeorm/entities/city'

export interface ICity{
    create(data:ICityDTO):Promise<City>
    findById(name:string):Promise<City | undefined>
    findByName(name:string):Promise<City | undefined>
    save(city:City):Promise<City>
}