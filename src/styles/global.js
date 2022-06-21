import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {font-family: "Inter", sans-serif;
margin: 0;
padding: 0;}

:root{
    --toastify-color-dark: #343b41;
}
`;
export default GlobalStyle;
