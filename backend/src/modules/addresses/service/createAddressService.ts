import 'reflect-metadata'
import { injectable,inject } from 'tsyringe'

import { Iaddress } from '@modules/addresses/IAddress/Iaddress'
import { IaddressDTO }  from '@modules/addresses/dtos/Iadress'
import { Address }  from '@modules/addresses/infra/typeorm/entities/address'
import { AppError } from '@shared/appError/appError'

@injectable()
export class CreateAddressService{

   constructor(
           @inject("AddressRepository")
           private Address:Iaddress
      ){}

   public async execute({neighborhood,street,numbers}:IaddressDTO):Promise<Address>{
     
      const address=await this.Address.findByNumber(numbers)
   
      if(address){
         throw new AppError("this Address just exist",400)
      }
      const createAddress=await this.Address.create({neighborhood,street,numbers})

      return createAddress
   }
}