import { CreateCityService } from './createCityService'
import { FakeCreateCityRepository } from '@modules/cities/ICity/fake/fakeCreateCityRepository'
import { AppError } from '@shared/appError/appError'

let createCityService:CreateCityService
let fakeCreateCityRepository:FakeCreateCityRepository

describe("createCityService",()=>{
    
    beforeEach(()=>{
        fakeCreateCityRepository=new FakeCreateCityRepository()
        createCityService=new CreateCityService(fakeCreateCityRepository)
    })

    it("should be able to call CityService",async()=>{

        const create=jest.spyOn(fakeCreateCityRepository,'create')
        await createCityService.execute({
            name:"johndoe",
            description:"good man"
        })

        expect(create).toHaveBeenCalled()
    })

    it("should be create cities",async()=>{
       const City=await createCityService.execute({
        name:"johndoe",
        description:"good man"
    })

        expect(City).toHaveProperty('id')
    })

    it("should not be able to create City that just exist",async()=>{
        await createCityService.execute({
            name:"johndoe",
            description:"good man"
        })
        
        await expect(
            createCityService.execute({
                name:"johndoe",
                description:"good man"
            })
            ).rejects.toBeInstanceOf(AppError)
     })
})