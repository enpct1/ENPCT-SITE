import React from 'react';
import './style.css'
import { FaHome, FaPhoneAlt, FaEnvelope, FaPrint, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaPlaceOfWorship, FaMap, FaLocationArrow, FaYoutube, FaCaretRight } from 'react-icons/fa'

function Footer() {

  return (
    <>
      <footer className="footer">
        <div className="info">
          <h1>Informação </h1>

          <div className="location">
            <div className="local">
              <div className="icon"><FaLocationArrow /></div>
              <h5>
                Estrada nacional N1, km 60 Manhiça,<br />
                Maluana, Maputo, Moçambique  </h5>
            </div>

            <div className="local">
              <div className="icon"><FaEnvelope></FaEnvelope></div>
              <h5>info@enpct.org.mz</h5>
            </div>

            <div className="local">
              <div className="icon"><FaPhoneAlt></FaPhoneAlt></div>
              <h5>(+258) 21 811 2206</h5>
            </div>

          </div>

        </div>

        <div className="links">
          <h1>Links</h1>
          <ul>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Webmail</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Acervo Digital</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Gestor de Tarefas</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Maluana Bytes</a></li>
          </ul>
        </div>

        <div className="company">
          <h1>Junte-se à nos</h1>
          <ul>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Notícias</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Serviços</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Parques</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Sobre Nós</a></li>
            <li><a href="#">
              <FaCaretRight className='icon-footer' />
              Contacto</a></li>

          </ul>
        </div>

        <div className="social-media">
          <h1>Empresa</h1>
          <div className="social-media-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
          <p>Partilhe nossas preocupações em suas redes <br />sociais</p>
          <div className="formFooter">

            <div className="icon">
              <FaEnvelope />
            </div>
            <input type="email" name="email" id="mail" />
            <a className="button">Enviar</a>
          </div>

        </div>
      </footer>
      <div className="copyright">
        <h1>© 2023 ENPCT E.P. Todos os direitos reservados</h1>
      </div>
    </>
  )
};

export default Footer;