import 'antd/dist/antd.css'

import styled from "styled-components"

import { 
    Input as GetInput,
    Form as getForm,
} from 'antd'


export const Input=styled(GetInput)`
border: 1px solid #DCE2E6;
background: #FFFFFF;
box-sizing: border-box;
width: 416px;
height: 72px;
box-sizing: border-box;
&:nth-child(1){
         border-radius: 10px 10px 0px 0px;
    }
 &:nth-child(2){
     border-radius: 0px 0px 10px 10px;
 }
`