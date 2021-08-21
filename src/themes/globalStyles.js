import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    top:0;
    font-family: "Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}
/* svg {
 height: 100%;
} */
`;

export const Main = styled.div`
  height: 90vh;
  overflow: auto;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
`;

export const Wrapper = styled.div``;

export default GlobalStyles;
