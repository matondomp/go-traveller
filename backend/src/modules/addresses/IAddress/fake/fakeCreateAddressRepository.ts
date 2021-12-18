
import { v4 as uuid } from 'uuid'
import { Iaddress } from '../Iaddress'
import { Address } from '@modules/addresses/infra/typeorm/entities/address'

interface IRequest{
  street:string
  neighborhood?:string
  numbers? :string
}
export class FakeCreateAddressRepository implements Iaddress {
   
    private addressList:Address[]=[]
    public async findByNumber(nambers:string):Promise<Address | undefined>{
      const address=this.addressList.find(address=> address.numbers==nambers)
       
      return address
    }
   public async create(data:IRequest):Promise<Address>{

       const address=new Address()
       Object.assign(address,{ id:uuid(),...data})

       this.addressList.push(address)

       return address
   }
}