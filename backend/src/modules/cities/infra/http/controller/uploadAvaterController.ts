import { Request, Response } from "express"
import { UpdateAvatarService } from '@modules/cities/service/updateAvatarCityService'
import { container } from "tsyringe"

export  class UpdateAvatarController{


    async update (request: Request, response: Response): Promise<Response>{
        const uploadUserAvatar=container.resolve(UpdateAvatarService) 

        const city= await uploadUserAvatar.execute({
             city_id:request.params.id, avatarFilename:String(request.file?.filename)
         })
         
         return response.json(city)
              
   }
}