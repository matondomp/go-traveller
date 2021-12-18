import { Router } from 'express'
import multer from 'multer'

import { PlaceController } from '../controller/placeController'
import { UpdateAvatarController } from '../controller/uploadAvaterController'
import configUpload from '@config/upload'

const placeController= new PlaceController()
const updateAvatarController=new UpdateAvatarController()
const upload=multer(configUpload)
 const route=Router()

route.post("/",placeController.create)
route.get("/",placeController.listAllPlaces)

route.patch("/avatar/:id",
    upload.single("avatar"),
    updateAvatarController.update
)

export { route }