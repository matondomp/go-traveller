import "reflect-metadata"

import { inject, injectable } from 'tsyringe'

import { ICity } from '@modules/cities/ICity/ICity'
import { ICityDTO }  from '@modules/cities/dtos/ICityDTO'
import { City }  from '@modules/cities/infra/typeorm/entities/city'
import { AppError } from '@shared/appError/appError'
import { IDiskStoregeProviders } from '@shared/providers/storegeProvider/models/IDiskStoregeProvider'

interface IRequest{
    avatarFilename:string
    city_id:string
}

@injectable()
class UpdateAvatarService{

   constructor(
          @inject("CityRepository")
          private createCity:ICity,

          @inject("DiskStoreProvider")
          private diskStoreProvider:IDiskStoregeProviders
          ){}

   public async execute({ avatarFilename,city_id }:IRequest):Promise<City>{
       
       const city= await this.createCity.findById(city_id)
    
       if(!city){
           throw  new AppError("User don't exist!",404);
       }
       
       if(city.avatar){
          await this.diskStoreProvider.removeFile(city.avatar)
       }
        
       const fileName= await this.diskStoreProvider.saveFile(avatarFilename)
       city.avatar=fileName
       await this.createCity.save(city)
       return city

   }
}

export { UpdateAvatarService }