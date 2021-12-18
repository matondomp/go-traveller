import 'reflect-metadata'
import { injectable,inject } from 'tsyringe'

import { IPlace } from '@modules/places/IPlaces/Iplace'
import { IPlaceDTO }  from '@modules/places/dtos/IPlacesDTO'
import { Place }  from '@modules/places/infra/typeorm/entities/place'
import { AppError } from '@shared/appError/appError'

@injectable()
export class CreatePlaceService{

   constructor(
           @inject("PlaceRepository")
           private Place:IPlace
      ){}

   public async execute({name,description,address_id,category_id,city_id}:IPlaceDTO):Promise<Place>{
     
      const place=await this.Place.findByName(name)
   
      if(place){
         throw new AppError("this place just exist",400)
      }
      const createPlace=await this.Place.create({
         name,
         description,
         address_id,
         category_id,
         city_id
      })

      return createPlace
   }
}