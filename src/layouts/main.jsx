/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const MainLayout = ({ children, logoClassText }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else 
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo-light.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo-light.png");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
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

      </Head>
      <Navbar
        navbarRef={navbarRef}
        logoRef={logoRef}
        logoClass={logoClassText}
      />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
