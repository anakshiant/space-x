import React from "react";
import { NextPageContext } from "next";
import withRedux from "next-redux-wrapper";
import App, { AppContext, AppInitialProps } from "next/app";
import Head from "next/head";
import { NextRouter, withRouter } from "next/router";
import { Provider } from "react-redux";
import { Store } from "redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { initializeStore } from "@app/store";
import { State } from "@app/types";
import theme from '@app/theme';

export type Props = AppInitialProps & {
  store: Store<State>;
  router: NextRouter;
};

export interface Context extends NextPageContext {
  store: Store<State>;
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Monaco';
    font-style: normal;
    font-weight: normal;
    src: local('Monaco'), url('/public/fonts/Monaco.woff') format('woff');
  }

  html {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, button:disabled {
    font-family: 'Inter', sans-serif;
  }

  * {
    box-sizing: border-box;
    line-height: 1;
  }

  body,
  #__next {
    height: 100%;
    overflow-x: hidden;
    background: ${theme.BACKGROUND_COLOR};
    padding: 10px;
  }

  button {
    background-color: transparent;
  }

  a:focus,
  button:focus {
    outline: none;
  }

  input[type="text"][disabled] {
    cursor: not-allowed;
  }
`;

class MyApp extends App<Props> {
  activeError: number | null = null;

  // tslint:disable-next-line:function-name
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<AppInitialProps> {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render(): JSX.Element {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Cousine:400,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <title>SpaceX</title>
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={{ main: "light" }}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(initializeStore)(withRouter(MyApp));
