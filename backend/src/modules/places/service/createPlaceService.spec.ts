import { CreatePlaceService } from './createPlaceService'
import { FakeCreatePlaceRepository } from '@modules/places/IPlaces/fake/fakeCreatePlaceRepository'
import { AppError } from '@shared/appError/appError'

let createPlaceService:CreatePlaceService
let fakeCreatePlaceRepository:FakeCreatePlaceRepository

describe("createPlaceService",()=>{
    
    beforeEach(()=>{
        fakeCreatePlaceRepository=new FakeCreatePlaceRepository()
        createPlaceService=new CreatePlaceService(fakeCreatePlaceRepository)
    })

    it("should be able to call PlaceService",async()=>{

        const create=jest.spyOn(fakeCreatePlaceRepository,'create')
        await createPlaceService.execute({
            name:"johndoe",
            description:"good man",
            category_id:"1",
            address_id:"2"
        })

        expect(create).toHaveBeenCalled()
    })

    it("should be create places",async()=>{
       const place=await createPlaceService.execute({
        name:"johndoe",
        description:"good man",
        category_id:"1",
        address_id:"2"
    })

        expect(place).toHaveProperty('id')
    })

    it("should not be able to create place that just exist",async()=>{
        await createPlaceService.execute({
            name:"johndoe",
            description:"good man",
            category_id:"2",
            address_id:"2"
        })
        
        await expect(
            createPlaceService.execute({
                name:"johndoe",
                description:"good man",
                category_id:"2",
                address_id:"2"
            })
            ).rejects.toBeInstanceOf(AppError)
     })
})