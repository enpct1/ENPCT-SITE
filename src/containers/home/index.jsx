import '../home/style.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook, FaUserGraduate, FaCertificate,FaToolbox } from 'react-icons/fa'

function Inicio() {
  return (
    <>
      <main>
        <div className="home">

          <h1>Empresa Nacional de Parques de Ciência e Tecnologia,  E.P.</h1>

          <h3><spam>A empresa</spam> do futuro <spam>já está em</spam> Moçambique</h3>

          <div className="btn">
            <a href="#" className="btn-1">CONTACTO</a>
            <a href="#" className="btn-2">REGISTE-SE</a>
          </div>

          <div className="card-contair">
            <div className="card">
              <div className="icon"><FaGlobe /></div>
              <h5>Serviços</h5>
              <p>
                Treinamento
                Profissional<br />
                Certificação
                Profissional<br />
                Incubara de
                Empresas
                Desenvolvimento e
                Consultoria de TI<br />
              </p>
              <a href="#" className="btn-3">LER MAIS</a>
            </div>

            <div className="card">
              <div className="icon"><FaGlobeAfrica /></div>
              <h5>Parques</h5>
              <p>
                Parque da Maluana<br />
                Parque de Mocuba<br />
                Parque de Muereti<br />
                Parque de Dombe<br />
              </p>
              <a href="#" className="btn-3">LER MAIS</a>

            </div>

            <div className="card">
              <div className="icon"><FaFileArchive /></div>
              <h5>Documentos</h5>
              <div className="documentos">
                <a className="docs" href="/src/components/documentos/ENPCT - contas.pdf">ENPCT-Contas.pdf</a>
                <a className="docs" href="/src/components/documentos/ENPCT - contas.pdf">valor gasto.pdf</a>
                <a className="docs" href="/src/components/documentos/ENPCT - contas.pdf">receita anual 2023.pdf</a>
              </div>
              <a href="#" className="btn-3">LER MAIS</a>
            </div>
          </div>
        </div>
      </main>

      <div className="sobre-nos">
        <div className="content">
          <div className="content-text">
            <h1>Sobre Nós</h1>
            <h3>
            Por Decreto 21/2012 de 6 de Julho foi criada a Empresa Nacional de Parques de Ciência e 
                Tecnologia E.P. abreviadamente designada ENPCT E.P. e aprovados os respectivos Estatutos.
                A ENPCT E.P. é uma pessoa colectiva de direito público, dotada de personalidade jurídica 
                e com autonomia administrativa, financeira e patrimonial <a href="sobre.jsx">mais</a>.<center/>
            </h3>
            

          </div>
          <div className="content-img">
            <img class="img-1" src="/src/components/img/09.jpg" alt="Logo da ENPCT" />
            <img class="img-1" src="/src/components/img/13.gif" alt="Logo da ENPCT" />
          </div>
        </div>

      </div>

      <div className="servicos">
        <h1>Serviços</h1>
        <div className="service-container">

          <div className="card-container">
            <div className="card">
              <div className="icon"><FaUserGraduate /></div>
              <h2>Treinamento <br />Profissional</h2>
              <a href="#" className="btn-4">LER MAIS</a>
            </div>

          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon"><FaCertificate /></div>
              <h2>Certificação <br />Profissional</h2>
              <a href="#" className="btn-4">LER MAIS</a>
            </div>

          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon"><FaToolbox /></div>
              <h2>Incubara de<br />Empresas</h2>
              <a href="#" className="btn-4">LER MAIS</a>
            </div>

          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon"><FaCode /></div>
              <h2>Desenvolvimento e<br />Consultoria de TI</h2>
              <a href="#" className="btn-4">LER MAIS</a>
            </div>

          </div>
        </div>
      </div>
      <div className="noticias">
        <h1>Notícias</h1>

        <div className="noticias-container">
          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/WhatsApp Image 2023-04-05 at 04.33.41 (1).jpeg" alt="Noticia Actual" />
            </div>
            <p>Visita de trabalho da sua Excelência Edson Da Graça Macuácua Vice-Ministro da Ciência, Tecnologia e Ensino Superior</p>
            <a href="#">ACTUAL</a>
          </div>

          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/WhatsApp Image 2023-04-05 at 04.33.45.jpeg" alt="Noticia Actual" />
            </div>
            <p>Visita de trabalho da sua Excelência Edson Da Graça Macuácua Vice-Ministro da Ciência, Tecnologia e Ensino Superior</p>
            <a href="#">ACTUAL</a>
          </div>

          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/WhatsApp Image 2023-02-27 at 15.05.49.jpeg" alt="Noticia Actual" />
            </div>
            <p>Os Robos são a nova sensação</p>
            <a href="#">ACTUAL</a>
          </div>
        </div>
      </div>
      <div className="parques">
        <h1>Parques</h1>
        <div className="parques-container">
          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTM</h1>
            <h2>Parque de Ciência e Teclonogias de Maluana</h2>
            <p>Localizado na província de Maputo, no
              distrito de Manhiça, com segmento de TIC's</p>
            <button>Ler Mais</button>
          </div>
          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTM</h1>
            <h2>Parque de Ciência e Teclonogias de Mocuba</h2>
            <p>Localizado na província de Zambézia, no
              distrito de Mocuba, com segmento de Agronegócio</p>
            <button>Ler Mais</button>
          </div>
          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTD</h1>
            <h2>Parque de Ciência e Teclonogias de Dombe</h2>
            <p>Localizado na província de Manica, no
              distrito de Sussundenga, com segmento de Agronegócio</p>
            <button>Ler Mais</button>
          </div>
          <div className="card-parque">
            <div className="icon"><FaGlobe /></div>
            <h1>PCTM</h1>
            <h2>Parque de Ciência e Teclonogias de Muereti</h2>
            <p>Localizado na província de Nampula, no
              distrito de Nacala, com segmento de Transporte & Logística</p>
            <button>Ler Mais</button>
          </div>
        </div>
      </div>


      {/*Parte da Administracao*/}

      <div className="slide-container">
        <h1>Conselho de Administração </h1>
        <div className="slide-content">

          <div className="card-wrapper">
            <div className="cardx">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="/src/components/img/Jose_Nhampossa_Admin.png" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">José Leopoldo Nhampossa</h2>
                <p className="description-1">Administrador de Pelouro de Ciência, Tecnologia e Inovação </p>
                <p className="description">Antes de imprimir qualquer documento, lembre-se que há cada vez menos arvores. Se necessário, utilize os 2 lados das folhas. Decida com responsabilidade ambiental</p>
                <button className="button">Ver mais</button>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="cardx">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="/src/components/img/juliao_cumbane_PCA.jpg" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Julião João Cumbane </h2>
                <p className="description-1">Presidente do Conselho Administrativo</p>
                <p className="description">Temos no parque a possibilidade de criar o Silicon Valley Moçambicano, temos a ferramenta que todos precisávamos. Agora vamos fazer acontecer.</p>
                <br />
                <button className="button">Ver mais</button>
              </div>
            </div>
          </div>


          <div className="card-wrapper">
            <div className="cardx">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="/src/components/img/tinga_maquetela_cumbana.png" alt="" className="card-img" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Tinga Maquetela Cumbana</h2>
                <p className="description-1">Administrador do Pelouro Comercial e de Administração e Finanças </p>
                <p className="description">Acreditamos que coisas maravilhosas acontecem quando as pessoas se reúnem e a tecnologia deve tornar isso possível para elas de qualquer lugar no mundo</p>
                <button className="button">Ver mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Parceiros  */}

      <div className="parceiros">
        <h1>Nossos Parceiros</h1>
        <div className="parceiros-container">
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/adm.png" alt="millenium-bim" /></a>
            </div>
            <p>LAM</p>
          </div>
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/unizambeze.png" alt="millenium-bim" /></a>
            </div>
            <p>UNIZAMBEZE</p>
          </div>
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/wutivi.png" alt="millenium-bim" /></a>
            </div>
            <p>WUTIVE</p>
          </div>
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/unizambeze.png" alt="millenium-bim" /></a>
            </div>
            <p>UNIZAMBEZE</p>
          </div>
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/unizambeze.png" alt="millenium-bim" /></a>
            </div>
            <p>UNIZAMBEZE</p>
          </div>
          
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/wutivi.png" alt="millenium-bim" /></a>
            </div>
            <p>WUTIVE</p>
          </div>
        </div>
      </div>



    </>
  )
}

export default Inicio;