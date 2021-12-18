import styled from "styled-components";


export const Card=styled.section`
  width: 100%;
   color:#fff ;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction:row;
 
  
   

`

export const ItemCard=styled.div`
         display: flex;
        align-items: center;
        flex-direction:column;
        width: 204px ;
        height: 213px;
        background: #F5F8FA;  
        color:black  ;
        border-radius:10px;
        border: 3px solid black;
        border: 1px solid #DCE2E6;
        margin-bottom:40px;
        &+div{
          margin-left: 20px;
        }
     div{
        padding: 20px;
        display: flex;
        align-items: center ;
        justify-content: space-between ;
         width: 100% ;
         color:red ;
         border-bottom:1px solid #DCE2E6;
         svg{
            color:#F25D27 ;
            font-size:26px;
        }
       p{
           div{
             width:24px;
             height: 24px;
            padding: 0;
            border: 2px solid black;
            border-radius:4px;
            background: #FFFFFF;
            border: 1px solid #DCE2E6;
            border-radius: 8px;
        }
       }
    }  
    
    span{
       width: 60%;
       margin-top:20px ;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
   }
`