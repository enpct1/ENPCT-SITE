import '../home/style.css'
import {FaCode, FaGlobe, FaHome, FaPhoneAlt, FaSchool} from 'react-icons/fa'

function Inicio() {
    return (
      <>
        <main>
        <div className="home">
          
          <h1>Empresa Nacional de Parques de Ciência e Tecnologia,  E.P.</h1>

          <h3><spam>A empresa</spam> do futuro <spam>já está em</spam> já está em Moçambique</h3>
          
          <div className="btn">
              <a href="#" className="btn-1">ENTRAR EM CONTACTO</a>
              <a href="#" className="btn-2">REGISTE-SE</a>
          </div>
          
          <div className="card-contair">
          <div className="card">
             <div className="icon"><FaGlobe /></div>
             <h5>Servico</h5>
             <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Vero magnam illo est 
              quibusdam!
              </p>
              <a href="#" className="btn-3">LER MAIS</a>
              

          </div>
          <div className="card">
             <div className="icon"><FaGlobe /></div>
             <h5>Servico</h5>
             <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Vero magnam illo est 
              quibusdam!
              </p>
              <a href="#" className="btn-3">LER MAIS</a>

          </div>
          <div className="card">
             <div className="icon"><FaGlobe /></div>
             <h5>Servico</h5>
             <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Vero magnam illo est 
              quibusdam!
              </p>
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
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Dolor hic placeat aperiam quasi eum nisi repudiandae harum 
                              laborum libero exercitationem, animi vero tempore, inventore 
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Dolor hic placeat aperiam quasi eum nisi repudiandae harum 
                              laborum libero exercitationem, animi vero tempore, inventore 
                              </h3>
                            
                        </div>
                        <div className="content-img">
                           <img class="img-1" src="./img/conceito-de-controle-de-qualidade-padrao-m (1).jpg" alt="Logo da ENPCT" />
                           <img class="img-1" src="./img/conceito-de-controle-de-qualidade-padrao-m (2).jpg" alt="Logo da ENPCT" />
                        </div>
                    </div>

                </div>
        
                <div className="servicos">
                <h1>Serviços</h1>
                  <div className="service-container">
                       
                       <div className="card-container">
                            <div className="card">
                              <div className="icon"><FaCode /></div>
                              <h2>Treinamento <br/>Profissional</h2>
                              <a href="#" className="btn-4">LER MAIS</a>
                            </div>
                            
                       </div>
                       <div className="card-container">
                            <div className="card">
                              <div className="icon"><FaCode /></div>
                              <h2>Certificação <br/>Profissional</h2>
                              <a href="#" className="btn-4">LER MAIS</a>
                            </div>
                            
                       </div>
                       <div className="card-container">
                            <div className="card">
                              <div className="icon"><FaCode /></div>
                              <h2>Incubara de<br/>Empresas</h2>
                              <a href="#" className="btn-4">LER MAIS</a>
                            </div>
                            
                       </div>
                       <div className="card-container">
                            <div className="card">
                              <div className="icon"><FaCode /></div>
                              <h2>Desenvolvimento e<br/>Consultoria de TI</h2>
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
                          <img src="./img/conceito-de-controle-de-qualidade-padrao-m (2).jpg" alt="Noticia Actual" />
                          </div>
                          <p>Os Robos são a nova sensação</p>
                        <a href="#">ACTUAL</a>
                      </div>
                    
                      <div className="card-noticia">
                        <div className="imagem">
                          <img src="./img/conceito-de-controle-de-qualidade-padrao-m (2).jpg" alt="Noticia Actual" />
                          </div>
                          <p>Os Robos são a nova sensação</p>
                        <a href="#">ACTUAL</a>
                      </div>
                    
                      <div className="card-noticia">
                        <div className="imagem">
                          <img src="./img/conceito-de-controle-de-qualidade-padrao-m (2).jpg" alt="Noticia Actual" />
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
                        <p>Localisado na província de Maputo, no 
                          distrito de Manhiça, com objectivo denegocio nas TIC's</p>
                          <button>Ler Mais</button>
                   </div>
                   <div className="card-parque">
                        <div className="icon"><FaGlobe /></div>
                        <h1>PCTM</h1>
                        <h2>Parque de Ciência e Teclonogias de Maluana</h2>
                        <p>Localisado na província de Maputo, no 
                          distrito de Manhiça, com objectivo denegocio nas TIC's</p>
                          <button>Ler Mais</button>
                   </div>
                   <div className="card-parque">
                        <div className="icon"><FaGlobe /></div>
                        <h1>PCTM</h1>
                        <h2>Parque de Ciência e Teclonogias de Maluana</h2>
                        <p>Localisado na província de Maputo, no 
                          distrito de Manhiça, com objectivo denegocio nas TIC's</p>
                          <button>Ler Mais</button>
                   </div>
                   <div className="card-parque">
                        <div className="icon"><FaGlobe /></div>
                        <h1>PCTM</h1>
                        <h2>Parque de Ciência e Teclonogias de Maluana</h2>
                        <p>Localisado na província de Maputo, no 
                          distrito de Manhiça, com objectivo denegocio nas TIC's</p>
                          <button>Ler Mais</button>
                   </div>
                  </div>
                  
                  
                  
                </div>
                
                
      </>
    )
  }
  
  export default Inicio;