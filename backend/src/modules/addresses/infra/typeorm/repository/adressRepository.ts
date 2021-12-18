import { getRepository,Repository } from 'typeorm'


import { Address } from '../entities/address'
import { Iaddress } from '@modules/addresses/IAddress/Iaddress'
import { IaddressDTO } from '@modules/addresses/dtos/Iadress'

export class AddressRepository implements Iaddress{

    private addressRepository:Repository<Address>
    constructor(){
        this.addressRepository=getRepository(Address)
    }

   public async findByNumber(numbers:string):Promise<Address | undefined>{

        const address=this.addressRepository.findOne({ where:{ numbers } })
       
        return address
    }
    public async create({ street,neighborhood,numbers }:IaddressDTO):Promise<Address>{
        console.log(street,neighborhood,numbers)
        const  address=this.addressRepository.create({ street,neighborhood,numbers })
        await this.addressRepository.save(address)

        return address
    }
}