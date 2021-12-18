import styled from "styled-components";
interface IButtonPropaty{
  color:string
  htmlType:string
}

export const Button=styled.button<IButtonPropaty> `

         background: #115D8C;
         border-radius: 10px;
         padding:11px 32px;
         color:#fff;
         background: ${ props=>props.color };
         font-weight:bolder;
         border:none;


 
`
export const Section=styled.section`

   display: flex !important;
   align-items: center !important;
   justify-content: space-between !important;
   width: 672px !important;
`

