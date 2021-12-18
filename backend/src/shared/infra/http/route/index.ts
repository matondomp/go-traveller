import { Router  } from "express";
import { userRoute }  from '@modules/users/infra/http/routes/user.route'
import { sessionRoute }  from '@modules/users/infra/http/routes/session.route'
import { route as categoryRoute } from '@modules/categories/infra/http/route/route'
import { route as cityRoute } from '@modules/cities/infra/http/route/route'
import { route as placesRoute } from '@modules/places/infra/http/route/route'
import { route as AddressRoute } from '@modules/addresses/infra/http/route/route'

export const route=Router()

route.use("/user",userRoute)
route.use("/session",sessionRoute)
route.use("/category",categoryRoute)
route.use("/address",AddressRoute)
route.use("/cities",cityRoute)
route.use("/places",placesRoute)