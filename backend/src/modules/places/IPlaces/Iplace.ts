import { IPlaceDTO } from '../dtos/IPlacesDTO'
import { Place }  from '@modules/places/infra/typeorm/entities/place'

export interface IPlace{
    create(data:IPlaceDTO):Promise<Place>
    findById(name:string):Promise<Place | undefined>
    findByName(name:string):Promise<Place | undefined>
    save(Place:Place):Promise<Place>
}