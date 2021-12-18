import { ICategoryDTO } from '../dtos/ICategoryDTO'
import { Category }  from '@modules/categories/infra/typeorm/entities/category'

export interface ICategory{
    create(data:ICategoryDTO):Promise<Category>
    findByName(name:string):Promise<Category | undefined>
}