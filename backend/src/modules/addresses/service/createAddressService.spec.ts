import { CreateAddressService } from './createAddressService'
import { FakeCreateAddressRepository } from '@modules/addresses/IAddress/fake/fakeCreateAddressRepository'
import { AppError } from '@shared/appError/appError'

let createAddressService:CreateAddressService
let fakeCreateAddressRepository:FakeCreateAddressRepository

describe("createAddressService",()=>{
    
    beforeEach(()=>{
        fakeCreateAddressRepository=new FakeCreateAddressRepository()
        createAddressService=new CreateAddressService(fakeCreateAddressRepository)
    })

    it("should be able to call AddressService",async()=>{

        const create=jest.spyOn(fakeCreateAddressRepository,'create')
        await createAddressService.execute({
            street:"johndoe",
            neighborhood:"good man",
            numbers:"234"
        })

        expect(create).toHaveBeenCalled()
    })

    it("should be create Addresss",async()=>{
       const address=await createAddressService.execute({
        street:"johndoe",
        neighborhood:"good man",
        numbers:"234"
    })

        expect(address).toHaveProperty('id')
    })

    it("should not be able to create Address that just exist",async()=>{
        await createAddressService.execute({
            street:"johndoe",
            neighborhood:"good man",
            numbers:"234"
        })
        
        await expect(
            createAddressService.execute({
                street:"johndoe",
                neighborhood:"good man",
                numbers:"234"
            })
            ).rejects.toBeInstanceOf(AppError)
     })
})