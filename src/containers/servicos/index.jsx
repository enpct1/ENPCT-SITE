import '../servicos/style.css'
import {FaCode, FaGlobe, FaHome, FaPhoneAlt, FaSchool,FaUserGraduate, FaCertificate,FaToolbox } from 'react-icons/fa'

function Servicos() {

    return (
      <>
      <div className="service">
        <div className="text-container">
          <h1> Serviços </h1>
        </div>



          <div className="services-container">

            <div className="services">
              <div className="service-img">
                <div className="icon"><FaToolbox  /></div>
                <h2>Incubação de Empresas</h2> 
              </div>
              <div className="texto">
                <p>Incubamos empresas. Oferecemos espaço e logística (15 gabinetes com mobiliários, PC, 
                    Internet, Telefone, 4 Salas de reuniões e Tranaporte)</p>
              </div>
              
            </div>

          </div>


          <div className="services-container">

            <div className="services">
              <div className="service-img">
                <div className="icon"><FaUserGraduate /></div>
                <h2>Treinamento Profissional</h2> 
             </div>
              <div className="texto">
              <p>Dámos treinamento profissional em diversas áreas do saber com maior 
                  destaque para as Tecnologias de Informação e Comunicação.</p>
              </div>
  
            </div>

           </div>
          

          <div className="services-container">

            <div className="services">
                <div className="service-img">
                  <div className="icon"><FaCertificate /></div>
                  <h2>Certificação Profissional</h2> 
              </div>
              <div className="texto">
                <p>Dámos certificação profissional e Internacional em 
                   diversas áreas do saber com em ambiente cómodo e climatizado.</p>
              </div>

            </div>

          </div>



          <div className="services-container">

            <div className="services">
              <div className="service-img">
                <div className="icon"><FaCode /></div>
                <h2>Desenvolvimento e consultoria em TIC</h2> 
             </div>
              <div className="texto">
              <p>Somos uma empresa de tecnologia especializada em entregar soluções tecnológicas que impulsionam 
                  negócios. Criar soluções é o nosso lema.</p>
              </div>
  
            </div>

          </div>
            

          </div>
      
      </>
    )
  }
  
  export default Servicos;