import { FaAddressCard, FaEnvelope, FaGlobe, FaLocationArrow, FaMailchimp, FaPhoneAlt } from 'react-icons/fa';
import './style.css'

function Contacto () {

    return (
      <>
      <div className="contact">
        <div className="text-container">
          <h1>Contacto</h1>
        </div>
        <div className="contact-container">
          <div className="formulario">
              <form action="">
                <input type="text" name="" id="" placeholder="Nome"/>
                <input type="email" name="" id="" placeholder="E-mail" />
                <textarea name="" id="" cols="30" rows="5" placeholder="Insira o teu texto"></textarea>
                <a href="" className="btn">Enviar</a>
              </form>
          </div>
          <div className="google-map">
            <h1>Google Map</h1>
          </div>
          </div>
          <div className="more-info">
            <div className="card-address">
              <div className="icon">
                <FaLocationArrow />
              </div>
              <h1>Endereço</h1>
              <p>Estrada N.1, km 60 Manhiça, Maluana, Maputo, Moçambique  </p>
            </div>
            <div className="card-address">
              <div className="icon">
                <FaGlobe />
              </div>
              <h1>Website</h1>
              <p>http://www.enpct.org.mz</p>
            </div>
            <div className="card-address">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <h1>Telefone</h1>
              <p>(+258) 21 811 2206</p>
            </div>
            <div className="card-address">
              <div className="icon">
                <FaEnvelope />
              </div>
              <h1>E-mail</h1>
              <p>info@enpct.org.mz</p>
            </div>
            
          </div>
        
      </div>
      </>
    )
  }
  
  export default Contacto;