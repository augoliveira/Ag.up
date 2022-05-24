/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <Image
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
                width={800}
                height={969}
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  A Agência.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                A <strong>Agência full service UP.EXPERT</strong> sempre trabalha para ficar por dentro das últimas tendências e melhores práticas para aplicar aos projetos de sua empresa.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Nossa missão
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Nossos objetivos
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Por que nós?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
