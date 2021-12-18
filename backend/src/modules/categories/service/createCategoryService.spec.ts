import { CreateCategoryService } from './createCategoryService'
import { FakeCreateCategoryRepository } from '@modules/categories/ICategories/fake/fakeCreateCategoryRepository'
import { AppError } from '@shared/appError/appError'

let createCategoryService:CreateCategoryService
let fakeCreateCategoryRepository:FakeCreateCategoryRepository

describe("createCategoryService",()=>{
    
    beforeEach(()=>{
        fakeCreateCategoryRepository=new FakeCreateCategoryRepository()
        createCategoryService=new CreateCategoryService(fakeCreateCategoryRepository)
    })

    it("should be to call categoryService",async()=>{

        const create=jest.spyOn(fakeCreateCategoryRepository,'create')
        await createCategoryService.execute('johnDoe')

        expect(create).toHaveBeenCalled()
    })

    it("should be create categories",async()=>{
       const category=await createCategoryService.execute('johnDoe')

        expect(category).toHaveProperty('id')
    })

    it("should not be able to create category that just exist",async()=>{
        await createCategoryService.execute('johnDoe')
        
        await expect(
            createCategoryService.execute('johnDoe')
            ).rejects.toBeInstanceOf(AppError)
     })
})