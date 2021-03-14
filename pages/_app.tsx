import '../styles/globals.scss'

import App from "next/app";
import React from "react";

import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

import { store } from "@app/redux/store";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps}></Component>
        </MuiThemeProvider>
      </Provider>
    );
  }
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
}


const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);