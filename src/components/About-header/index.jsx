import React from "react";
import Image from "next/image";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      data-overlay-dark="5"
    >
      <div> 
        <Image
          width={2746}  //use the width of the image being used
          height={4681} //use the height of the image being used
          layout="fill"
          alt="water_portrait"
          src="/img/slid/bg-05-free-img.jpg" //image saved in public/home
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Sobre | Up.expert</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  Agência
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
