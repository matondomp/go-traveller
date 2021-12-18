import { Request, Response } from 'express'
import { container } from 'tsyringe'


import { CreateCityService } from '@modules/cities/service/createCityService'

export class CityController{
   
  public async create(request:Request, response:Response):Promise<Response>{
      const { name,description }= request.body
      const getInstaneOfCreateCityService= container.resolve(CreateCityService)
   
      const  createCityService=await getInstaneOfCreateCityService.execute({ name,description })

      return response.json({createCityService})
  }
}