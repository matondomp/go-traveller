import React from "react";

import { Input as InputElement } from './style'

interface PropsElement{
   placeholder?:string 
   prefix?:any
}

export const Input:React.FC<PropsElement> =({placeholder,prefix})=>{
    return <InputElement  size="large" placeholder={placeholder} prefix={prefix} />
}
