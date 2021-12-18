import styled from "styled-components";

export const Asides=styled.aside`
 
   width: 6%;
   background:#F25D27;
   color: #ffff;
   height: 821px;
   display: flex;
   align-items: center;
   flex-direction: column;
    div{
        margin-top:24px;
    }

    a{
        color:#ffff;
        margin-bottom:20px;
    }
   footer{  
    margin-top:250px;
   }
`

export const Content=styled.main`
    margin-top: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    svg{
        &+svg{
            margin-top:50px;
        }
    }
`