import React from 'react'
import appData from '../../data/app.json'
import Image from 'next/image'
import Link from 'next/link'
import User from '../../components/icons/user.js'
import Empresa from '../../components/icons/empresa.js'
import Seta from '../../components/icons/seta.js'

const orcamento = () => {
  return (
    <>
      <div className="modal" id="m-curriculo">
        <div id="close-curriculo"></div>

        <div className="container">
          <div id="txt">
            <h4>Boa Sorte</h4>
            <hr />
            <p>
              Seu currículo será analisado
              <br className="quebra" />
              por nossa equipe.
            </p>
            <br />
            <span>
              Assim que surgir a oportunidade
              <br />
              entraremos em contato.
            </span>
          </div>
        </div>
      </div>

      <div className="modal" id="m-contato">
        <div id="close-contato"></div>

        <div className="container">
          <div id="txt">
            <h4>Parabéns</h4>
            <hr />
            <p>
              Sua mensagem foi
              <br className="quebra" /> enviada com sucesso!
            </p>
            <br />
            <span>
              Nossa equipe retornará o contato
              <br />o mais breve possível.
            </span>
          </div>
        </div>
      </div>

      <aside>
        <Link href="/">
          <a>
            <User />
          </a>
        </Link>
        <h2>siga as etapas para fazer o seu orçamento.</h2>

        <nav id="menu">
          <ul>
            <li className="active" id="t1">
              <div className="topic">
                <span>01.</span> Selecione o seu perfil
              </div>
            </li>
            <li id="t2">
              <div className="topic">
                <span>02.</span> Selecione o tipo de projeto
              </div>
            </li>
            <li id="t3">
              <div className="topic">
                <span>03.</span> Mais detalhes sobre o projeto
              </div>
            </li>
            <li id="t4">
              <div className="topic" id="last">
                <span>04.</span> Informações para contato
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      <form id="budget">
        <div id="container">
          <div className="step" id="step-01">
            <div className="title">
              <span className="number">
                01<span className="dot">.</span>
              </span>
              <h1>Esse projeto é pessoal ou para sua empresa?</h1>
            </div>

            <div className="content">
              <div id="select-perfil">
                <div className="perfil soft-hover">
                  <Link href="/formulario">
                    <a>
                      <User />
											<h3>Pessoal</h3>
										<Seta />
                    </a>
                  </Link>
                 <input type="radio" name="perfil" value="1" />
                </div>
                <div className="perfil soft-hover" id="business">
                <Link href="/formulario">
                <a>
                  <Empresa />
                  <h3>Empresa</h3>
                  <Seta />
                </a>
                </Link>
                  <input type="radio" name="perfil" value="2" />
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default orcamento
