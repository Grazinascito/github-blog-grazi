import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%
}

body{
    -webkit-font-something: antialiased;
    background: ${(props) => props.theme["blue-800"]};
    font-size: 1.6rem;

}


body, input, textarea,button{
    font-family: 'Nunito', sans-serif;
    color: ${(props) => props.theme["blue-100"]};
 }

`;
