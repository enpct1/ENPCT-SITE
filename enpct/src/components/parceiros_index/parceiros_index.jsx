import '../parceiros_index/parceiros_index.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, 
  FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook } from 'react-icons/fa'
import  Carousel  from  'react-elastic-carousel' ;
import  React ,  {  Componente  }  from  'react' ; 


function Parceiros_index() {
  return (
    <>
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
              <a href="#"><img src="/src/components/img/UJC.png" alt="UJC" /></a>
            </div>
            <p>UJC</p>
          </div>
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/unizambeze.png" alt="millenium-bim" /></a>
            </div>
            <p>UNIZAMBEZE</p>
          </div>
          
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/xiphefu.jpg" alt="xiphefu" /></a>
            </div>
            <p>Xiphefu</p>
          </div>

          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/t4s.png" alt="T4S" /></a>
            </div>
            <p>T4S</p>
          </div>

          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/biotech.png" alt="Biotech" /></a>
            </div>
            <p>Biotech</p>
          </div>

          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/gomarket.jpg" alt="Gomarket" /></a>
            </div>
            <p>Gomarket</p>
          </div>
          
          <div className="card-container">
            <div className="imagem">
              <a href="#"><img src="/src/components/img/logobusa.png" alt="Logobusa" /></a>
            </div>
            <p>Logobusa</p>
          </div>

          
        </div>
      </div>



    </>
  )
}

export default Parceiros_index;