import Head from "next/head";
// Mui packages
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// Third-party packages
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "../styles/globals.css";
import theme from "themes";

// Client-side cache, shared for the whole session of the user in the browser.

const cache = createCache({ key: "css" });

function MyApp(props) {
  const { Component, emotionCache = cache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
