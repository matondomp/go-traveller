import 'antd/dist/antd.css'

import styled from "styled-components";
import { 
    Input as _Input,
    Form as _Form
 } from 'antd'

 interface Iform{
    onSubmit:React.FormEvent | any
 }

export const Container=styled.div`
   margin: 0;
   display: flex;
   width:100%;
  
`
export const Content=styled.div`
 width:100%;

`

export const Main=styled.main`

   width: 1000px;
   height: auto;
   background: #FFFFFF;
    border: 1px solid #DCE2E6;
    box-sizing: border-box;
    border-radius: 16px;
    margin: 244px auto;
   
`