import { createGlobalStyle } from 'styled-components'

export const GlobalStyle=createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
}

body{
    background-color:#F5F8FA;
}

  h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
     color: #123952;
     margin:0;
  }
  button{
      cursor: pointer;
  }
`