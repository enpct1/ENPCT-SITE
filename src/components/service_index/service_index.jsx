import '../service_index/service_index.css'
import { FaCertificate, FaCode, FaFolderOpen, FaTrain } from 'react-icons/fa'

function Service_Index() {
  return (
    <>
      <div className="servicos">
        <h1>Serviços</h1>
        <div className="service-container">

          <div className="card-container">
            <div className="card">
              <div className="icon"><FaTrain /></div>
              <h2>Treinamento <br />Profissional</h2>
            </div>

          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon"><FaCertificate /></div>
              <h2>Certificação <br />Profissional</h2>
            </div>

          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon"><FaFolderOpen /></div>
              <h2>Incubara de<br />Empresas</h2>
            </div>

          </div>
          <div className="card-container">
            <div className="card">
              <div className="icon"><FaCode /></div>
              <h2>Desenvolvimento e<br />Consultoria de TI</h2>
            </div>

          </div>
        </div>
        <a href="#" className="btn-4">SOLICITAR</a>
      </div>

    </>
  )
}

export default Service_Index;