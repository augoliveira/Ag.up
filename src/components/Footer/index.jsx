/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>E-mail : </span> Contato@upexpert.com.br
                  </li>
                  <li>
                    <span>End : </span> BLOCO A - SHS QUADRA 6, SALA 501
                    Asa sul, Brasília-DF
                  </li>
                  <li>
                    <span>Tel. : </span> (61) 3355-6348
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Siga-nos</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Boletim de Notícias</h6>
              <p>Inscreva-se para assinar a newsletter!</p>
              <Formik
                initialValues={{
                  Inscrever: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Seu email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Inscrever</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Postagem no Instagram</h6>
              <div className="insta-gallary">
                <a href="#0">
                  <img src="/img/insta/1.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/2.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/3.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
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
  );
};

export default Footer;
