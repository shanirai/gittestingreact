// React, Next packages
import React from "react";
import Head from "next/head";
// Mui packages

// Custom packages or Third Party packages

function Layout({ title, children, content }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={content} key="title" />

        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}

export default Layout;
