import { Request, Response } from 'express'
import { container } from 'tsyringe'


import { CreatePlaceService } from '@modules/places/service/createPlaceService'
import { createQueryBuilder } from 'typeorm'
import { PlaceRepository } from '@modules/places/infra/typeorm/repository/placeRepository'
/* import { createQueryBuilder } from 'typeorm' */

export class PlaceController{
 /*  private placeRepository:PlaceRepository
  constructor(){
     this.placeRepository=new PlaceRepository()
  } */

  public async create(request:Request, response:Response):Promise<Response>{
      const { name,
              description,
              address_id,
              category_id,
              city_id
            }= request.body
        console.log("city",city_id)
      const getInstaneOfCreatePlaceService= container.resolve(CreatePlaceService)
   
      const  createPlaceService=await getInstaneOfCreatePlaceService.execute({ 
        name,
        description,
        address_id,
        city_id
       })

      return response.json({Place:createPlaceService})
  }

  public async listAllPlaces(request:Request, response:Response):Promise<Response>{
   let placeRepository=new PlaceRepository()
      const places=await placeRepository.listAll()
      const formatedArray=places.map(item => {
         return {
                ...item,
                avatar: `http://localhost:3335/uploads/${item.avatar}`
          }
      })
      return response.json({Places:formatedArray})
  }

}