import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="htit sm-mb30">
              <h2>Nossa missão é clara</h2>
              <p>Somos uma Assessoria de Marketing especialmente desenvolvida para aprimorar os processos de vendas da sua empresa.</p>
              <p>Agência de Marketing Digital Full Service! Com uma combinação única de talentos criados para a era digital. Geramos ideias e estratégias impulsionadas pela percepção do consumidor e ampliadas por um domínio sem precedentes da tecnologia.</p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Hoje em dia uma marca que não está presente online fica invisível.
                E estar presente online significa muito mais que ter um site funcionando
                – significa ter todo um trabalho digital que engloba vários itens. 
                É preciso, entre muitas coisas, ter um ótimo site que mostre seus 
                serviços ou produtos de forma fácil, mídias sociais ativas e que 
                conversem com o seu público, campanhas para engajar a venda e dar 
                suporte na pós-venda, entre outras.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
