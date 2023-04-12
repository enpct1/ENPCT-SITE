import '../noticias_index/noticias_index.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, 
  FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook } from 'react-icons/fa'

function Noticias_Index() {
  return (
    <>
      <div className="noticias">

        <h1>Notícias</h1>

        <div className="noticias-container">
          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/auditorio5.jpg" alt="Noticia Actual" />
            </div>
            <p>Os Robos são a nova sensação</p>
            <a href="#">ACTUAL</a>
          </div>

          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/auditorio5.jpg" alt="Noticia Actual" />
            </div>
            <p>Os Robos são a nova sensação</p>
            <a href="#">ACTUAL</a>
          </div>

          <div className="card-noticia">
            <div className="imagem">
              <img src="/src/components/img/auditorio5.jpg" alt="Noticia Actual" />
            </div>
            <p>Os Robos são a nova sensação</p>
            <a href="#">ACTUAL</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Noticias_Index;