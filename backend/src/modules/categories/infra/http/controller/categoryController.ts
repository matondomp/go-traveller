import { Request, Response } from 'express'
import { container } from 'tsyringe'


import { CreateCategoryService } from '@modules/categories/service/createCategoryService'

export class CategoryController{
   
  public async create(request:Request, response:Response):Promise<Response>{
      const { name }= request.body
      const getInstaneOfCreateService= container.resolve(CreateCategoryService)
   
      const  createService=await getInstaneOfCreateService.execute(name)

      return response.json({createService})
  }
}