import { Request, Response } from "express"
import { UpdateAvatarService } from '@modules/places/service/uploadUploadService'
import { container } from "tsyringe"

export class UpdateAvatarController{


    async update (request: Request, response: Response): Promise<Response>{
        const uploadUserAvatar=container.resolve(UpdateAvatarService) 
         console.log(request.file?.filename)
        const city= await uploadUserAvatar.execute({
             place_id:request.params.id, avatarFilename:String(request.file?.filename)
         })
         
         return response.json(city)
              
   }
}