import fs, { rename } from 'fs'
import path from 'path';

import { IDiskStoregeProviders } from "../models/IDiskStoregeProvider";
import ConfigUploadFile from '@config/upload'

export class DiskStoreProvider implements IDiskStoregeProviders{

    public async saveFile(file:string): Promise<string>{
        fs.promises.rename(
            path.resolve(ConfigUploadFile.tmpDirectory,file),
            path.resolve(ConfigUploadFile.uploads,'uploads',file)
        )

        return file
    }

    public async removeFile(file:string): Promise<void>{

        const getFile=path.resolve(ConfigUploadFile.tmpDirectory,file)
        try {
            fs.promises.stat(getFile)
        } catch {
            return
        }
           fs.promises.unlink(getFile)
    }

}