import { container } from "tsyringe";
import { HashProviders } from '@modules/users/infra/provider/hashProvider/inplementation/hashProviders'
import { TokenProvider } from '@modules/users/infra/provider/tokenProvider/implamentation/tokenProvider'

container.registerSingleton(
    "HashProvider",
    HashProviders
)

container.registerSingleton(
    "TokenProvider",
    TokenProvider
)