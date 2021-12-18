import 'express-async-errors'
import { SessionUserServices } from "./sessionUserService"
import { FakeHashProviders } from "../infra/provider/hashProvider/fakes/fakeHashedProvider"
import { FakeTokenProvider } from "../infra/provider/tokenProvider/fakes/fakeTokenProvider"
import { UsersRepository } from "../IuserRepository/fakes/usersRepository"
import { CreateUserService } from "./createUsersService"
import { AppError } from '@shared/appError/appError'

describe("sessionUserService",()=>{
   it("should be able to authenticate user",async()=>{
    const usersRepository=new UsersRepository()
    const fakeHashedProvider=new FakeHashProviders()
    const fakeTokenProvider=new FakeTokenProvider()
    const createUser=new CreateUserService(
        usersRepository,
        fakeHashedProvider
    )
    const sessionUser=new SessionUserServices(
            usersRepository,
            fakeHashedProvider,
            fakeTokenProvider
        )
        const userCreated= await createUser.execute({
            name:"mp",
            email:"mp@gmail.com",
            password:"123"
        })
        const userLogged= await sessionUser.execute({
              email:"mp@gmail.com",
              password:"123"
          })
        expect(userLogged).toHaveProperty("token")
        expect(userCreated.name).toBe("mp")
   })

   it("should able to verify if exit user",async()=>{
    const usersRepository=new UsersRepository()
    const fakeHashedProvider=new FakeHashProviders()
    const fakeTokenProvider=new FakeTokenProvider()

    const sessionUser=new SessionUserServices(
        usersRepository,
        fakeHashedProvider,
        fakeTokenProvider
    )
    const createUser=new CreateUserService(
        usersRepository,
        fakeHashedProvider
    )
      await createUser.execute({
            name:"mp",
            email:"mp@gmail.com",
            password:"123"
        })
        expect(sessionUser.execute({
            email:"invalid-email",
            password:"123"
        })).rejects.toBeInstanceOf(AppError)
   })

   it("should able to verify if password is correct",async()=>{
    const usersRepository=new UsersRepository()
    const fakeHashedProvider=new FakeHashProviders()
    const fakeTokenProvider=new FakeTokenProvider()

    const sessionUser=new SessionUserServices(
        usersRepository,
        fakeHashedProvider,
        fakeTokenProvider
    )
    const createUser=new CreateUserService(
        usersRepository,
        fakeHashedProvider
    )
      await createUser.execute({
            name:"mp",
            email:"mp@gmail.com",
            password:"123"
        })
        expect(sessionUser.execute({
            email:"mp@gmail.com",
            password:"invalid-password"
        })).rejects.toBeInstanceOf(AppError)
   })

   it("should able to generate token",async()=>{
    const usersRepository=new UsersRepository()
    const fakeHashedProvider=new FakeHashProviders()
    const fakeTokenProvider=new FakeTokenProvider()
    
    const sessionUser=new SessionUserServices(
        usersRepository,
        fakeHashedProvider,
        fakeTokenProvider
    )
    const createUser=new CreateUserService(
        usersRepository,
        fakeHashedProvider
    )
      await createUser.execute({
            name:"mp",
            email:"mp@gmail.com",
            password:"123"
        })
       const session=await sessionUser.execute({
            email:"mp@gmail.com",
            password:"123"
        })
        expect(session).toHaveProperty("token")
   })

})