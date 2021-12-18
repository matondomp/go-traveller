import { Router } from 'express'
import multer from 'multer'

import configUpload from '@config/upload'
import { CityController } from '../controller/cityController'
import { UpdateAvatarController } from '../controller/uploadAvaterController'

const cityController= new CityController()
const updateAvatarController=new UpdateAvatarController()

const upload=multer(configUpload)
 const route=Router()

route.post("/",cityController.create)

route.patch("/avatar/:id",
    upload.single("avatar"),
    updateAvatarController.update
)

export { route }