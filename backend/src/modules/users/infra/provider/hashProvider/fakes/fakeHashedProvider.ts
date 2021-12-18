import { IhashProviders } from "../model/IhashProvider";

export class FakeHashProviders implements IhashProviders{

   public async generateHash(payload:string):Promise<string>{
      return payload
   }

   public async compareHash(payload:string,hashed:string):Promise<boolean>{
       return payload===hashed
   }
}