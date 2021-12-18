import { Router } from 'express'

import { CategoryController } from '../controller/categoryController'

const categoryController= new CategoryController()

 const route=Router()

route.post("/",categoryController.create)

export { route }