import { Router } from 'express'

import { AddressController } from '../controller/addressController'

const addressController= new AddressController()

 const route=Router()

route.post("/",addressController.create)

export { route }