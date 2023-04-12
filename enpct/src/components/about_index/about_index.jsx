import '../about_index/about_index.css'
import { FaCode, FaFileArchive, FaFilePdf, FaGlobe, FaGlobeAfrica, FaHome, FaLinkedin, FaLinkedinIn, FaPhoneAlt, 
  FaRProject, FaSchool, FaServicestack, FaStopCircle, FaSwatchbook } from 'react-icons/fa'

function About_Index() {
  return (
    <>
{/* Sobre Nos */}
      <div className="sobre-nos">
        <div className="content">
          <div className="content-text">
            <h1>Sobre Nós</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor hic placeat aperiam quasi eum nisi repudiandae harum
              laborum libero exercitationem, animi vero tempore, inventore
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor hic placeat aperiam quasi eum nisi repudiandae harum
              laborum libero exercitationem, animi vero tempore, inventore
            </h3>

          </div>
          <div className="content-img">
            <img class="img-1" src="/src/components/img/WhatsApp Image 2023-02-27 at 15.05.50 (1).jpeg" alt="Logo da ENPCT" />
            <img class="img-1" src="/src/components/img/WhatsApp Image 2023-02-27 at 15.05.49.jpeg" alt="Logo da ENPCT" />
          </div>
        </div>

      </div>
    </>
  )
}

export default About_Index;