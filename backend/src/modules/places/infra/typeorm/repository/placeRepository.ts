import { getRepository,Repository } from 'typeorm'


import { Place } from '../entities/place'
import { IPlace } from '@modules/places/IPlaces/Iplace'
import { IPlaceDTO } from '@modules/places/dtos/IPlacesDTO'

export class PlaceRepository implements IPlace{

    private placeRepository:Repository<Place>
    constructor(){
        this.placeRepository=getRepository(Place)
    }

   public async findByName(name:string):Promise<Place | undefined>{

        const  Place=this.placeRepository.findOne({ where:{ name } })
       
        return Place
    }
    public async create({ 
            name,
            description,
            address_id,
            category_id,
            city_id
        }:IPlaceDTO):Promise<Place>{

        console.log(name,description)
        const  place=this.placeRepository.create({
             name,
            description,
            address_id,
            category_id,
            city_id
         })
        await this.placeRepository.save(place)

        return place
    }

    public async listAll(){
        const places = await this.placeRepository.find({ relations: ["category","address","city"] });
        return places
    }
    public async findById(place_id:string):Promise<Place | undefined>{

        const  place=this.placeRepository.findOne({ where:{ id:place_id } })
       
        return place
    }
     public async save(place_id:Place):Promise<Place>{
        const place=await this.placeRepository.save(place_id)

        return place
    }
}