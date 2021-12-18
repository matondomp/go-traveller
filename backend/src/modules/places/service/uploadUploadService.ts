import "reflect-metadata"

import { inject, injectable } from 'tsyringe'

import { IPlace } from '@modules/places/IPlaces/Iplace'
import { IPlaceDTO }  from '@modules/places/dtos/IPlacesDTO'
import { Place }  from '@modules/places/infra/typeorm/entities/place'
import { AppError } from '@shared/appError/appError'
import { IDiskStoregeProviders } from '@shared/providers/storegeProvider/models/IDiskStoregeProvider'

interface IRequest{
    avatarFilename:string
    place_id:string
}

@injectable()
class UpdateAvatarService{

   constructor(
          @inject("PlaceRepository")
          private createPlace:IPlace,

          @inject("DiskStoreProvider")
          private diskStoreProvider:IDiskStoregeProviders
          ){}

   public async execute({ avatarFilename,place_id }:IRequest):Promise<Place>{
       
       const place= await this.createPlace.findById(place_id)
    
       if(!place){
           throw  new AppError("User don't exist!",404);
       }
       
       if(place.avatar){
          await this.diskStoreProvider.removeFile(place.avatar)
       }
        
       const fileName= await this.diskStoreProvider.saveFile(avatarFilename)
       place.avatar=fileName
       await this.createPlace.save(place)
       return place

   }
}

export { UpdateAvatarService }