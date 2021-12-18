
import { v4 as uuid } from 'uuid'
import { IPlace } from '../Iplace'
import { Place } from '@modules/places/infra/typeorm/entities/place'

interface IRequest{
  name:string
  description:string
}
export class FakeCreatePlaceRepository implements IPlace {
   
    private placesList:Place[]=[]
    public async findByName(name:string):Promise<Place | undefined>{
      const place=this.placesList.find(place=> place.name==name)
       
      return place
    }
   public async create(data:IRequest):Promise<Place>{

       const place=new Place()
       Object.assign(place,{ id:uuid(),...data})

       this.placesList.push(place)

       return place
   }
   public async save(data:Place):Promise<Place>{

    this.placesList.push(data)
    
    return data
  }
  public async findById(place_id:string):Promise<Place | undefined>{
    const place=this.placesList.find(place=> place.id==place_id)
     
    return place
  }
}