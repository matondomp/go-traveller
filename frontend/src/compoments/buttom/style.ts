
import styled from "styled-components"


export const Button=styled.button`
    width: 416px;
    height: 72px;
    background: #F25D27;
    border-radius: 10px;
    margin-top:20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.5;
    border:none;
    transition:background 1s;
    &:hover{
        color: #FFFFFF;
        background: #F25D27;
        opacity: 1;
    }
    &:active{
        color: #FFFFFF;
        background: #F25D27;
        opacity: 1;
    }
`