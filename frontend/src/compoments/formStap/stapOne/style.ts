
import 'antd/dist/antd.css'


import styled from "styled-components";
import { 
    Input as _Input,
    Form as _Form
} from 'antd'

interface Iform{
    onSubmit:React.FormEvent | any
 }

export const Main=styled.main`

   width: 800px;
   height: auto;
   background: #FFFFFF;
    border: 1px solid #DCE2E6;
    box-sizing: border-box;
    border-radius: 16px;
    margin: 144px auto;
   
`
export const Title=styled.div`
 
        display: flex;
        align-items: center;
        color: #FFFFFF;
        width: 100%;
        padding:40px;
        font-weight:bold;
        background:linear-gradient(90deg, #F5FFF5 0%, rgba(220, 245, 221) 62.99%); 
        h1{
            align-items: center;
            color: #51B853;
            margin-left:40px;
        }
        div{
            display:flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height:  34px;
            background: #51B853;
            color:#FFFFFF;
            border-radius:10px;
            padding: 20px;
            font-weight: bold;
            font-style:30px;
        }
    

`

export const Form=styled(_Form)<Iform>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 672px;
  margin:0 auto;
 
  section{
      margin-top:20px;
      margin-bottom:40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      line-height: 22px;
      color: #617480;
      span{
          svg{
              margin-right: 20px;
              color: #F25D27;;
          }
      }
      
    
  }
`
export const Label =styled.article`
    margin-top:20px;
    width: 100%;
    margin-bottom: 24px;
    background: none;
    color: black;
    color:#617480;
    font-style:14px;
    h1{
        margin:20px 0 ;
        font-weight: bolde;
        font-size: 34px;
        line-height: 30px;
        color: #123952;
        border-bottom:2px solid #DCE2E6;
        padding-bottom:20px;
    }
`

/* export const Br=styled.strong`
    width: 600px ;
    height: 2px ;
    background:#DCE2E5 ;
` */

export const Input=styled(_Input)`
    margin-top:0px;
    width: 100% !important;
    height: 72px !important;
    background: #F5F8FA !important;

    border: 1px solid #DCE2E6 !important;
    box-sizing: border-box !important;
    border-radius: 10px !important;

`
export const DopZone=styled.div`
    width: 100%;
    height: auto;
    background: #F5F8FA !important;
    padding:10px;
    border: 1px solid #DCE2E6 !important;
    box-sizing: border-box;
    border-radius: 10px !important;
;
`

export const Textarea=styled(_Input.TextArea)`
    width: 100%;
    height: 202px !important;
    background: #F5F8FA;

    border: 1px solid #DCE2E6;
    box-sizing: border-box;
    border-radius: 10px;
;
`

/* Card */

export const Card=styled.div`
   display: flex;
  align-items: center;
  flex-direction: column;
  gap:40px;
`
export const DivItem=styled.div`
      background: none;
      width: 100%;
      display: block;
      color: black;
      font-weight: bold;
     
  
`

export const Main_=styled.div`
  width: 1300px;
   height: auto;
   padding:50px;
   background: #FFFFFF;
    border: 1px solid #DCE2E6;
    box-sizing: border-box;
    border-radius: 16px;
    margin: 144px auto;

`