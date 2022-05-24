import React from "react";
import AboutUs from "../../components/About-us/about-us";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import Intro4 from "../../components/Intro4";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services03 from "../../components/Services03/services3";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import DarkTheme from "../../layouts/Dark";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <AboutUs />
      <Services03 />
      <VideoWithTestimonials />
      <SkillsCircle theme="dark" subBG />
      <PortfolioCustomColumn column={3} filterPosition="center" />
      <Clients1 theme="dark" subBG />
      <Blogs4 />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
