
import { container } from 'tsyringe'
import { IUsersRepository } from '@modules/users/IuserRepository/IUsersRepository'
import { UserRepository } from '@modules/users/infra/typeorm/repository/userRepository'
import { CategoryRepository } from '@modules/categories/infra/typeorm/repository/categoryRepository'
import { ICategory } from '@modules/categories/ICategories/ICategory'
import { CityRepository } from '@modules/cities/infra/typeorm/repository/cityRepository'
import { ICity } from '@modules/cities/ICity/ICity'
import { PlaceRepository } from '@modules/places/infra/typeorm/repository/placeRepository'
import { IPlace } from '@modules/places/IPlaces/Iplace'
import { Iaddress } from '@modules/addresses/IAddress/Iaddress'
import { AddressRepository } from '@modules/addresses/infra/typeorm/repository/adressRepository'

import '@modules/users/infra/provider'
import '../providers'

container.registerSingleton<IUsersRepository>(
   "UserRepository",
   UserRepository
)

container.registerSingleton<ICategory>(
   "CategoryRepository",
   CategoryRepository
)

container.registerSingleton<ICity>(
   "CityRepository",
   CityRepository
)

container.registerSingleton<IPlace>(
   "PlaceRepository",
   PlaceRepository
)

container.registerSingleton<Iaddress>(
   "AddressRepository",
   AddressRepository
)

