import '../administracao_index/administracao_index.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, 
  FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook } from 'react-icons/fa'

function Administracao_Index() {
  return (
    <>
    
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

    </>
  )
}

export default Administracao_Index;