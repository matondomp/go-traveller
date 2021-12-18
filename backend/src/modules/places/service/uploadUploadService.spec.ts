
import { UpdateAvatarService } from '@modules/places/service/uploadUploadService'
import { FakeDiskStoreProvider } from '@shared/providers/storegeProvider/fakes/fakeStoregeProvider'

import { AppError } from '@shared/appError/appError'
import { FakeCreatePlaceRepository } from '../IPlaces/fake/fakeCreatePlaceRepository'
import { CreatePlaceService } from './createPlaceService'

let createPlaceService:CreatePlaceService
let fakeCreatePlaceRepository:FakeCreatePlaceRepository
let fakeDiskStoreProvider:FakeDiskStoreProvider
let updateAvatarService:UpdateAvatarService

describe("UpdateAvatarService",()=>{

    beforeEach(()=>{
                fakeCreatePlaceRepository=new FakeCreatePlaceRepository()
                fakeDiskStoreProvider=new FakeDiskStoreProvider()
                createPlaceService=new CreatePlaceService(fakeCreatePlaceRepository)
                updateAvatarService =new UpdateAvatarService(fakeCreatePlaceRepository,fakeDiskStoreProvider)
            })

    it("should be able to upload avatar",async()=>{

      
            const place=await createPlaceService.execute({
                name:"brazilia",
                description:"good town"
            })
    
            const response=await updateAvatarService.execute({
                avatarFilename:"mp.jpg",
                place_id:place.id,

            })

            expect(response.avatar).toBe("mp.jpg")
    })

    it("should be able to check if don´t exit place",async()=>{
            await createPlaceService.execute({
                name:"brazilia",
                description:"good town"
            })
    
            expect(updateAvatarService.execute({
                place_id:"brazilia",
                avatarFilename:"vp.jpg"
            })).rejects.toBeInstanceOf(AppError)
    })

     it("should be able to delete old avatar when updating new one",async()=>{
     
        const inspectRemoveFile=jest.spyOn(fakeDiskStoreProvider,"removeFile")

        const place=await createPlaceService.execute({
            name:"brazilia",
            description:"good town"
        })
    

           await updateAvatarService.execute({
                avatarFilename:"mp.jpg",
                place_id:place.id
            })

           await updateAvatarService.execute({
                avatarFilename:"mp1.jpg",
                place_id:place.id
            })

            expect(inspectRemoveFile).toHaveBeenCalledWith("mp.jpg")
            expect(place.avatar).toBe("mp1.jpg")
    })

})