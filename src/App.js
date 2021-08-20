import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./themes";

import { isMobile, isAndroid } from "react-device-detect";
import GlobalStyles from "./themes/globalStyles";

function App() {
  useEffect(() => {
    console.log("Is  " + isAndroid);
  });

  if (!isMobile) {
    return <h1 style={{ textAlign: "center" }}>Windows Browser Not Support</h1>;
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <h1>App</h1>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
