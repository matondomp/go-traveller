

export interface IDiskStoregeProviders{
    saveFile(file:string): Promise<string>
    removeFile(file:string): Promise<void>
}