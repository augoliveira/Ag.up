
import React from "react";
import Link from "next/link";
import Split from "../../components/Split";
import DarkTheme from "../../layouts/Dark";
import addParlx from "../../common/addParlx";
import Services03 from '../../components/Services03/services3'
import ShowcasesOneCenter from '../../components/Showcases-one-center/index'
import initIsotope from "../../common/initIsotope";
import bg from "../../../public/img/demos/bg-slide.jpg";
import Typewriter from "typewriter-effect";

const Demos = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent]);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
      addParlx();
      document.querySelector("body").style.backgroundColor = "#181b21";
    }
  }, [pageLoaded]);
  return (
    <DarkTheme>
      <style jsx>
        {`
          .masonery .item-img {
            position: relative;
            overflow: hidden;
          }

          .masonery .gallery .items {
            padding: 0 40px;
            margin-top: 80px;
            text-align: center;
          }

          .masonery .gallery .items h6 {
            margin-top: 25px;
            font-size: 17px;
            font-weight: 400;
            font-family: "Barlow Condensed", sans-serif;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
          }

          .masonery .gallery .items .item-img:hover img {
          }

          .masonery .item-img:hover .tlinks {
            opacity: 1;
          }

          .masonery .item-img .tlinks {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.4s;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            padding: 0 40px;
          }

          .masonery .item-img .tlinks a {
            padding: 14px 20px;
            border-radius: 5px;
            background: #32363e;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            margin: 5px 0;
          }

          .masonery .item-img .tlinks a:last-of-type {
            background: #75dab4;
            color: #181b21;
            margin-left: 5px;
          }

          .masonery .item-img .new {
            padding: 10px 30px;
            background: #75dab4;
            position: absolute;
            top: 0;
            left: -60px;
            width: 200px;
            transform: rotate(-30deg);
            font-size: 13px;
          }
        `}
      </style>

      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
        style={{backgroundImage: `url(${bg.src}) `,
        width: '100%',
        height: '100%', }}
        data-overlay-dark="4" 
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif;` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#8257e5; };` }}
                    >
                      <b className="medium-b">O que a </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255);` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> faz?</b>
                    </font>
                  </h2>
                  <p>
                  Nós cuidamos do seu futuro, para caminharmos juntos sempre.
                  </p>
                
                <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Marca",
                        "Campanha",
                        "Impressos",
                        "Sites e aplicativos",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                  <Link href="/home/home2-dark">
                            <a className="btn-curve btn-bord btn-lit mt-30">
                              <span>Agência de conteúdo</span>
                            </a>
                          </Link>
                  </div>
                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: "transparent" }}>
                    dev
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
        <section className="masonery section-padding sub-bg">
          <div className="container-fluid">
            <div className="sec-head custom-font text-center">
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  Agência criativa
                </h3>
              </Split>
              <span className="tbg">O que fazemos?</span>
            </div>
            <Services03 />
          
          </div>
        </section>

        <section
          className="masonery section-padding pb-70"
          style={{ background: "#181b21" }}
        >
          <div className="container-fluid">
            <div className="sec-head custom-font text-center">
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  Portfolio.
                </h3>
              </Split>
              <span className="tbg">Case website</span>
            </div>
            <section>
            <ShowcasesOneCenter />
            </section>
          </div>
        </section>
        <section className="services bords lficon section-padding position-re">
          <div className="container">
            <div className="row justify-content-center">
            <div className="container-fluid">
            <div className="sec-head custom-font text-center">
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  Agência criativa
                </h3>
              </Split>
              <span className="tbg">Soluções?</span>
            </div>
          </div>
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-paint-bucket"></span>
                  </div>
                  <div className="cont">
                    <h3>UI/UX Design</h3>
                    <p>
                      Nosso processo de design é baseado em metodologias
                      centradas no usuário, com iterações incrementais e
                      entregas contínuas, para garantir que as interfaces
                      funcionais sejam elaboradas com um alto nível de detalhe,
                      resultando em produtos com uma excelente experiência do
                      usuário.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-phone"></span>
                  </div>
                  <div className="cont">
                    <h3>Atingir o seu público-alvo</h3>
                    <p>
                      Através do tráfego e performance, você conhece reconhecer
                      a sua persona e com a segmentação ideal você direciona o
                      seu conteúdo ou a sua oferta para os leads mais
                      qualificados com menor custo para o cliente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-display1"></span>
                  </div>
                  <div className="cont">
                    <h3>Analisando o seu desempenho</h3>
                    <p>
                      Não basta criar o anúncio, é necessário saber o que está
                      funcionando ou não. Por isso, acompanhamos e analisamos
                      suas campanhas para que as adaptações sejam feitas até
                      alcançar o objetivo da campanha sem ter que estourar o
                      orçamento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-diskette"></span>
                  </div>
                  <div className="cont">
                    <h3>Atrair sua persona em diferentes estágios</h3>
                    <p>
                      Com os conhecidos funis de vendas, no caso do facebook
                      ads, você pode atrair o seu público quando ele ainda nem
                      se deu conta de que precisa de algo. Em diferentes
                      estágios é possível vender.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line top right"></div>
        </section>
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
            <p>
                COPYRIGHT © 2022 UP EXPERT | DESENVOLVIDO POR |{' '}
                <a href="https://upexpert.com.br/">
                  {' '}
                  Agência full service up.expert
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </DarkTheme>
  );
};

export default Demos;
