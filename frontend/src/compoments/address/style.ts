import styled from "styled-components"; 
import map from '../../assets/Mapa.png'

import { 
    Input as _Input,
    
 } from 'antd'

export const Container=styled.div`
   width: 100%;
  
  h1{
      border-bottom:1px solid #DCE2E6;
      padding-bottom:4px;
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
        margin:48px 0 24px 24px;
        font-weight: bolde;
        font-size: 34px;
        line-height: 30px;
        color: #123952;
    }
`

export const Input=styled(_Input)`
 
    width: 100% !important;
    height: 72px !important;
    background: #F5F8FA !important;

    border: 1px solid #DCE2E6 !important;
    box-sizing: border-box !important;
    border-radius: 10px !important;

`

export const LastInput=styled(_Input)`
      background-color: red !important;
      width:100% !important;
      height: 72px !important;
    background: #F5F8FA !important;

    border: 1px solid #DCE2E6 !important;
    box-sizing: border-box !important;
    border-radius: 10px !important;
`

export const Colletion=styled.div`
  display: flex;
  align-items: center;
  div{
      width: 100%;
      margin-right:24px;
       &+div{

            width: 268px;
            margin-right:0 !important;
        }
  }
 
`

export const CardImg=styled.div`
   width: 100%;
   height: 200px;
   background:url(${map}) no-repeat;
   background-size:cover;
   margin-top:30px;
   margin-bottom:40px;
`