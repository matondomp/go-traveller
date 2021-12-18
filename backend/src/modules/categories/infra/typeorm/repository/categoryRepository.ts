import { getRepository,Repository } from 'typeorm'


import { Category } from '../entities/category'
import { ICategory } from '@modules/categories/ICategories/ICategory'
import { ICategoryDTO } from '@modules/categories/dtos/ICategoryDTO'

export class CategoryRepository implements ICategory{

    private categoryRepository:Repository<Category>
    constructor(){
        this.categoryRepository=getRepository(Category)
    }

   public async findByName(name:string):Promise<Category | undefined>{

        const  category=this.categoryRepository.findOne({ where:{ name } })
       
        return category
    }
    public async create(name:ICategoryDTO):Promise<Category>{

        const  category=this.categoryRepository.create(name)
        await this.categoryRepository.save(category)

        return category
    }
}