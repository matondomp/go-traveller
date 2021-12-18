import { container }  from "tsyringe"

import { DiskStoreProvider } from "./storegeProvider/implematetion/diskstoregeProvider"
import { IDiskStoregeProviders } from "./storegeProvider/models/IDiskStoregeProvider"


container.registerSingleton<IDiskStoregeProviders>(
    "DiskStoreProvider",
    DiskStoreProvider
    )
