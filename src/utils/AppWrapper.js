import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./aos";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import store from "../Redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#009688"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#1de9b6"
      // dark: will be calculated from palette.secondary.main,
    }
    // error: will use the default color
  }
});

const AppWrapper = props => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ScrollToTop>{props.children}</ScrollToTop>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
