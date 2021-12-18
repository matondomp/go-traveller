import 'reflect-metadata'
import { injectable,inject } from 'tsyringe'

import { ICity } from '@modules/cities/ICity/ICity'
import { ICityDTO }  from '@modules/cities/dtos/ICityDTO'
import { City }  from '@modules/cities/infra/typeorm/entities/city'
import { AppError } from '@shared/appError/appError'

@injectable()
export class CreateCityService{

   constructor(
           @inject("CityRepository")
           private City:ICity
      ){}

   public async execute({name,description}:ICityDTO):Promise<City>{

      const City=await this.City.findByName(name)
   
      if(City){
         throw new AppError("this categry just exist",400)
      }
      const createCity=await this.City.create({name,description})

      return createCity
   }
}