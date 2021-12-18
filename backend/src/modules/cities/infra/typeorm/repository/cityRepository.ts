import { getRepository,Repository } from 'typeorm'


import { City } from '../entities/city'
import { ICity } from '@modules/cities/ICity/ICity'
import { ICityDTO } from '@modules/cities/dtos/ICityDTO'

export class CityRepository implements ICity{

    private cityRepository:Repository<City>
    constructor(){
        this.cityRepository=getRepository(City)
    }

   public async findById(city_id:string):Promise<City | undefined>{

        const  city=this.cityRepository.findOne({ where:{ id:city_id } })
       
        return city
    }
    
    public async findByName(name:string):Promise<City | undefined>{

        const  city=this.cityRepository.findOne({ where:{ name } })
       
        return city
    }
    public async create({ name,description }:ICityDTO):Promise<City>{
        console.log(name,description)
        const  city=this.cityRepository.create({ name,description })
        await this.cityRepository.save(city)

        return city
    }

     public async save(city:City):Promise<City>{
        const getCity=await this.cityRepository.save(city)

        return getCity
    }
}