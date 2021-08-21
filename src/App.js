import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { theme } from "./themes";

import { isMobile } from "react-device-detect";
import GlobalStyles, { Main, Wrapper } from "./themes/globalStyles";
import { Navbar } from "./components";
import { Attend, Home, Leave, Profile } from "./pages";

function App() {
  if (!isMobile) {
    return <h1 style={{ textAlign: "center" }}>Windows Browser Not Support</h1>;
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Wrapper>
          <Main>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/attend" component={Attend} />
              <Route path="/leave" component={Leave} />
              <Route path="/profile" component={Profile} />
              <Route path="/detail" component={Profile} />

              <Route path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </Main>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
