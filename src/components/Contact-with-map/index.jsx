import React from "react";
import { Formik, Form, Field } from "formik";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Entrar em contato.</h4>

                <Formik
                  initialValues={{
                    Nome: "",
                    Email: "",
                    Mensagem: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Sua mensagem foi enviada com sucesso. Entrarei em contato com você em breve.";
                    // Reset the values
                    values.Nome = "";
                    values.Email = "";
                    values.Mensagem = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.Email && touched.Email && (
                            <div>{errors.Email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" className="btn-curve btn-lit">
                          <span>Enviar mensagem</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Informação de contato.</h4>
                <h3 className="custom-font wow" data-splitting>
                Vamos conversar.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">contato@upexpert.com.br</a>
                  </h5>
                  <h5>(61) 9 8669-2775)</h5>
                </div>
                <h3 className="custom-font wow" data-splitting>
                  Local.
                </h3>
                <div className="item">
                  <h6>
                  BLOCO A - SHS QUADRA 6, SALA 501,
                    <br />
                    Asa sul, Brasilia-DF
                  </h6>
                </div>
                <div className="social mt-50">
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
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9015747563835!2d-47.89049398518106!3d-15.80914302752947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b802b49f51d%3A0xfb4614fe89c36a4!2sAg%C3%AAncia%20full%20service%20up.expert!5e0!3m2!1sen!2sbr!4v1652962296060!5m2!1sen!2sbr"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

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
    </>
  );
};

export default ContactWithMap;
