import React, { JSXElementConstructor } from "react";

import { Button ,Section } from './style'

interface ComponentsProps{
    buttonDescription:string
    color:string
    onClick():React.MouseEventHandler<HTMLElement>
    htmlType:string
}

export const FooterButton:React.FC<ComponentsProps> =({ children,buttonDescription,color,onClick,htmlType })=>{
    return(
        <Section>
            <span>
                 { children }
            </span>
            <Button color={color} htmlType={htmlType}  onClick={onClick} >{ buttonDescription }</Button>
       </Section> 
    )
}