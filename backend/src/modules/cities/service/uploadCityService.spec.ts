
import { UpdateAvatarService } from '@modules/cities/service/updateAvatarCityService'
import { FakeDiskStoreProvider } from '@shared/providers/storegeProvider/fakes/fakeStoregeProvider'
import { FakeCreateCityRepository } from '@modules/cities/ICity/fake/fakeCreateCityRepository'

import { AppError } from '@shared/appError/appError'
import { CreateCityService } from './createCityService'

let createCityService:CreateCityService
let fakeCreateCityRepository:FakeCreateCityRepository
let fakeDiskStoreProvider:FakeDiskStoreProvider
let updateAvatarService:UpdateAvatarService

describe("UpdateAvatarService",()=>{

    beforeEach(()=>{
                fakeCreateCityRepository=new FakeCreateCityRepository()
                fakeDiskStoreProvider=new FakeDiskStoreProvider()
                createCityService=new CreateCityService(fakeCreateCityRepository)
                updateAvatarService =new UpdateAvatarService(fakeCreateCityRepository,fakeDiskStoreProvider)
            })

    it("should be able to upload avatar",async()=>{

      
            const city=await createCityService.execute({
                name:"brazilia",
                description:"good town"
            })
    
            const response=await updateAvatarService.execute({
                avatarFilename:"mp.jpg",
                city_id:city.id,

            })

            expect(response.avatar).toBe("mp.jpg")
    })

    it("should be able to check if don´t exit city",async()=>{
            await createCityService.execute({
                name:"brazilia",
                description:"good town"
            })
    
            expect(updateAvatarService.execute({
                city_id:"brazilia",
                avatarFilename:"vp.jpg"
            })).rejects.toBeInstanceOf(AppError)
    })

     it("should be able to delete old avatar when updating new one",async()=>{
     
        const inspectRemoveFile=jest.spyOn(fakeDiskStoreProvider,"removeFile")

        const city=await createCityService.execute({
            name:"brazilia",
            description:"good town"
        })
    

           await updateAvatarService.execute({
                avatarFilename:"mp.jpg",
                city_id:city.id
            })

           await updateAvatarService.execute({
                avatarFilename:"mp1.jpg",
                city_id:city.id
            })

            expect(inspectRemoveFile).toHaveBeenCalledWith("mp.jpg")
            expect(city.avatar).toBe("mp1.jpg")
    })

})