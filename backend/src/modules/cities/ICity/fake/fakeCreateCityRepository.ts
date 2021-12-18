
import { v4 as uuid } from 'uuid'
import { ICity } from '../ICity'
import { City } from '@modules/cities/infra/typeorm/entities/city'

interface IRequest{
  name:string
  description:string
}
export class FakeCreateCityRepository implements ICity {
   
    private citiesList:City[]=[]
    public async findById(city_id:string):Promise<City | undefined>{
      const city=this.citiesList.find(city=> city.id==city_id)
       
      return city
    }
    public async findByName(name:string):Promise<City | undefined>{
      const city=this.citiesList.find(city=> city.name==name)
       
      return city
    }
   public async create(data:IRequest):Promise<City>{

       const city=new City()
       Object.assign(city,{ id:uuid(),...data})

       this.citiesList.push(city)

       return city
   }

   public async save(data:City):Promise<City>{

    this.citiesList.push(data)
    
    return data
   }
}