import 'reflect-metadata'
import { injectable,inject } from 'tsyringe'

import { ICategory } from '@modules/categories/ICategories/ICategory'
import { ICategoryDTO }  from '@modules/categories/dtos/ICategoryDTO'
import { Category }  from '@modules/categories/infra/typeorm/entities/category'
import { AppError } from '@shared/appError/appError'

@injectable()
export class CreateCategoryService{

   constructor(
           @inject("CategoryRepository")
           private category:ICategory
      ){}

   public async execute(name:string):Promise<Category>{

      const category=await this.category.findByName(name)
   
      if(category){
         throw new AppError("this categry just exist",400)
      }
      const createCategory=await this.category.create({name})

      return createCategory
   }
}