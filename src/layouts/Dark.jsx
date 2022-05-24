/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DarkTheme = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/dark.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/style.css" />
        <link rel="stylesheet" href="/assets/css/modal.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/cs-select.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/cs-skin-border.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/inputs.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/mqueries.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/normalize.css" />
        <link rel="stylesheet" href="/assets/orçamento/css/animate.css" />
	      <link rel="stylesheet" href="/lib/selectFx/cs-select.css"/>
	      <link rel="stylesheet" href="/lib/selectFx/cs-skin-border.css"/>
        <link rel="stylesheet" href="/lib/selectFx/cs-skin-border.css"/>
      </Head>
      {children}
    </>
  );
};

export default DarkTheme;
