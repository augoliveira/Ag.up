import React from 'react'
import Link from 'next/link'
import cardMouseEffect from '../../common/cardMouseEffect'

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll('.feat .items'))
  }, [])
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Engajamento</h5>
              <p>
                Depois de conquistar seu espaço no concorrido mercado das lojas
                virtuais é hora de trazer engajamento para o seu produto.
                Público que compra é público engajado! • Web Design • Landing
                pages • Implementação de loja virtual • Design e UX • Inbound
                Marketing
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Conversão</h5>
              <p>
                A conversão é o momento da venda, quando o público engajado
                finalmente faz a tão esperada compra. • Desenvolvimento de
                oferta (Copywriting) • C.R.O (Conversion Rate Optmization) •
                Controle de Vendas Omni-Channel • Programática • Inbound
                Marketing
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Retenção</h5>
              <p>
                Após a conversão o processo não termina. Precisamos encontrar
                maneiras de manter o cliente conectado com o seu negócio e assim
                aumentar o consumo por usuário, reduzindo seus custos para
                aquisição de novos clientes. • E-mail Marketing • Remarketing •
                Social Media • CRM • Obter Membro
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services3
