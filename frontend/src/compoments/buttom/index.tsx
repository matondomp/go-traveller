import React from "react";
import { Button as ButtoElement } from './style'

interface PropsElement{
   Icon?:any

}

export const Button:React.FC<PropsElement> =({children,Icon})=>{
    return <ButtoElement>{ children }</ButtoElement>
}
