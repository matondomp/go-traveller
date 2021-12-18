
import { v4 as uuid } from 'uuid'
import { ICategory } from '../ICategory'
import { Category } from '@modules/categories/infra/typeorm/entities/category'

interface IRequest{
  name:string
}
export class FakeCreateCategoryRepository implements ICategory {
   
    private categoriesList:Category[]=[]
    public async findByName(name:string):Promise<Category | undefined>{
      const category=this.categoriesList.find(category=> category.name==name)
       
      return category
    }
   public async create(data:IRequest):Promise<Category>{

       const category=new Category()
       Object.assign(category,{ id:uuid(),...data})

       this.categoriesList.push(category)

       return category
   }
}