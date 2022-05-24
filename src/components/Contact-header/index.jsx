import React from "react";
import addParlx from "../../common/addParlx";

const ContactHeader = ({ sliderRef }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="parlx">
                <h2 className="custom-font">
                  <span>Vamos</span>Fale sobre seu projeto.
                </h2>
                <p>
                Sinta-se à vontade para me fazer qualquer pergunta ou vamos conversar
                  sobre nossa futura colaboração.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">Contato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
