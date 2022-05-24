import { useState } from 'react'
import appData from '../../data/app.json'
import Image from 'next/image'
import Link from 'next/link'
import User from '../../components/icons/user.js'
import Seta from '../../components/icons/seta.js'
import Left from '../../components/icons/left.js'



function orcamento() {
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
            <li  id="t1">
              <div className="topic">
                <span>01.</span> Selecione o seu perfil
              </div>
            </li>
            <li className="active" id="t2">
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
					<span className="number">02<span className="dot">.</span></span>
					<h1>Selecione os tipos de projetos que você precisa</h1>
				</div>

				<div className="content">
					<div id="select-type">
					<div className="project-type soft-hover" id="logotipo_select">
						<User />
							<h3>Logotipo</h3>

							<input type="checkbox" name="product[]" value="Logotipo"/>
						</div>

						<div className="project-type soft-hover" id="papelaria_select">
						<User />
							<h3>Papelaria</h3>

							<input type="checkbox" name="product[]" value="Papelaria"/>
						</div>

						<div className="project-type soft-hover" id="pecas_select">
						<User />
							<h3>Peças Gráficas</h3>

							<input type="checkbox" name="product[]" value="Peças Gráficas"/>
						</div>

						<div className="project-type soft-hover" id="site_select">
						<User />
							<h3>Site</h3>

							<input type="checkbox" name="product[]" value="Site"/>
						</div>

						<div className="project-type soft-hover" id="blog_select">
						<User />
							<h3>Blog</h3>

							<input type="checkbox" name="product[]" value="Blog"/>
						</div>

						<div className="project-type soft-hover" id="loja_select">
						<User />
							<h3>Loja Virtual</h3>

							<input type="checkbox" name="product[]" value="Loja Virtual"/>
						</div>

						<div className="project-type soft-hover" id="redes_select">
						<User />
							<h3>Redes Sociais</h3>

							<input type="checkbox" name="product[]" value="Redes Sociais"/>
						</div>

						<div className="project-type soft-hover" id="cd-dvd_select">
						<User />
							<h3>CD/DVD</h3>

							<input type="checkbox" name="product[]" value="CD/DVD"/>
						</div>
					<br/>
					</div>
          
					<ul className="control-step" >
          <Link href="/">
          <a>
            <li className="prev soft-hover">
						<Left />
							Etapa anterior
						</li>
          </a>
          </Link>
						<li className="next soft-hover">
            <Link href="/">
              <a>
							Próxima etapa

							<Seta />
              </a>
              </Link>
						</li>
					</ul>
				</div>
			</div>
        </div>
      </form>
    </>
  )
}

export default orcamento
