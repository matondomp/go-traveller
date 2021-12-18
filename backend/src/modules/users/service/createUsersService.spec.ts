import { CreateUserService } from './createUsersService'
import  { UsersRepository } from '@modules/users/IuserRepository/fakes/usersRepository'
import { FakeHashProviders } from '@modules/users/infra/provider/hashProvider/fakes/fakeHashedProvider'

describe("CreateUserService",()=>{
    it("should be able to create users",async()=>{

        const usersRepository=new UsersRepository()
        const fakeHashedProvider=new FakeHashProviders()
        const createUser=new CreateUserService(
                usersRepository,
                fakeHashedProvider
            )
         
       const user=await createUser.execute({
            email:"mp@gmail.com",
            name:"mp",
            password:"123"
        })

        expect(user).toHaveProperty("name")

    })
    it("should be able to validate if just exist that user",async()=>{
        const usersRepository=new UsersRepository()
        const fakeHashedProvider=new FakeHashProviders()
        const createUser=new CreateUserService(
                usersRepository,
                fakeHashedProvider
            )
           await createUser.execute({
                email:"mp@gmail.com",
                name:"mp",
                password:"123"
            })
            
         expect(
            createUser.execute({
                email:"mp@gmail.com",
                name:"mp",
                password:"123"
            })).rejects.toBeInstanceOf(Error)
    })
})