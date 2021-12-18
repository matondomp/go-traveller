import styled from "styled-components";
import 'antd/dist/antd.css'

export const Container=styled.div`
   margin: 0;
   display: flex;
   width:100%;
`
export const Content=styled.div`
  width:100%;
`
export const Head=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img{
      width: 100%;
  }

`
export const DivArticle=styled.div`
   margin-top:20px;
   width: 1120px !important;
   height: auto;
   display: flex;
   align-items: center;
  

`

export const Item=styled.div`
       border: 1px solid #DCE2E6;
       border-radius: 16px;
       width: 188px !important;
       height: 288px !important;
       padding:20px;
       margin-left:45px;
       background-color: #fff;
       svg{
           margin-bottom:30px;
           color:#F25D27;
       }
     h1{
        margin-bottom:30px;
        font-weight:bold;
     }
`

export const DivItemArticle=styled.div`
        border-radius: 16px;
       width:406px;
       padding:20px;
       height: auto;
       background-color: #fff;
       h1{
           color:#123952;
           margin-bottom:20px;
       }
       p{
           margin-bottom: 40px;
           color: #123952;
           font-size: 20px;
           line-height: 30px;
       }
       span{
          color: #617480;
          font-size: 16px;
          line-height: 26px;
       }
`

export const Highlightd=styled.div`

   margin-top:20px;
   width: 100% !important;
   height: auto;
   display: flex;
   align-items: center;
   flex-direction: column;
   
   margin:16px 0 16px 0;
   margin-bottom: 80px;
   
   main{
       max-width: 1120px !important;
       display: grid;
       grid-template-columns:1fr 1fr 1fr 1fr;
     
   }
   div{
    margin-right:20px;
    margin-top:20px;
    border: 1px solid #DCE2E6;
    width: 266px !important;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:16px ;
 
    
        div{
            margin-top:0 !important;
            border-radius:none !important;
            border:none;
            width: 266px !important;
            img{
                width:100%;
                height:200px;

                border-radius:16px 16px 0 0;
                
            }
            margin-bottom:20px;
        }
        h1{
            width: 266px !important;
            margin-bottom:20px;
            padding: 30px;
            border-bottom:1px solid #DCE2E6;
        }
        footer{
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 236px !important;
            margin-bottom:20px;
            padding: 10px;
            color:#617480;
            svg{
                color:#F25D27;
            }
        }
   }

`

export const Title=styled.h1`
   width: 1120px !important;
   display: flex;
   align-items: center;
   margin:20px 19%;

`
export const Section=styled.section`
  position: absolute;
  top:-85px;
  left: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  margin:80px 0 40px 0;
  div{
    width: 310px !important;
    display: flex;
    align-items: center;
    h1{
        font-weight: 600;
        font-size: 36px;
        line-height: 46px;
        color: #123952;

    }                               
    
  }


`
export const TabColletion=styled.div`

width: 100%;
`


export const SectionImg=styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin:20px 0 40px 0;
  div{
    max-width: 1120px !important;
    width: 1120px ;
    display: flex;
    align-items: center;
    justify-content: center;
        border: 1px solid #DCE2E6;
        box-sizing: border-box;
        border-radius: 16px;
    main{
        width: 500px;
        background: #FFFFFF;
        padding: 20px;
        div{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            margin:20px 0 20px 0;
            border-radius: none;
            border:none;
            button {
                background: #F25D27;
                border-radius: 100px;
                color: #fff;
                font-weight: bold;
                padding:10px 18px;
                border:none;
                display: flex;
                align-items: center;
                svg{
                    margin-right:8px
                }
            }
            span {
                display: flex;
                align-items: center;
                svg{
                    color:#F25D27;
                    margin-right:24px;
                }
            }            
        } 
         p{
            font-size: 16px;
            line-height: 26px;
            font-size: 36px;
            line-height: 46px;
            color: #617480;
         }
        }                            
     img{
         flex:1;
         background-size:cover;
        margin-left:50px;
        border-radius:0 16px   16px 0;
     }                      
     
    }
`
