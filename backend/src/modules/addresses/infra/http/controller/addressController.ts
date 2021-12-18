import { Request, Response } from 'express'
import { container } from 'tsyringe'


import { CreateAddressService } from '@modules/addresses/service/createAddressService'

export class AddressController{
   
  public async create(request:Request, response:Response):Promise<Response>{
      const { numbers,neighborhood,street }= request.body
      const getInstaneOfCreateAddressService= container.resolve(CreateAddressService)
   
      const  createAddressService=await getInstaneOfCreateAddressService.execute({numbers,neighborhood,street })

      return response.json({createAddressService})
  }
}