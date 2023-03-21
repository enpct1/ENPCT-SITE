import React from 'react';
import './style.css'
import {FaHome, FaPhoneAlt ,FaEnvelope, FaPrint, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaPlaceOfWorship, FaMap, FaLocationArrow, FaYoutube} from 'react-icons/fa'

function Home() {

    return (
        <>
          <main className="main-home">
            <section className="about">
                <div className="about-container">
                  <h2>Sobre Nós</h2>
                  <div className="about-content">
                    <div className="coluna-a">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi consequatur harum expedita 
                        quisquam ipsum laborum provident recusandae voluptatibus,
                        inventore itaque necessitatibus velit voluptate deleniti labore atque. Dolores, sequi qui.
                      </p>
                      <a href="#"><button>Mais</button></a>

                    </div>
                    <div className="coluna-b">
                      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />


                    </div>
                  </div>

              </div>
            </section>
          </main>
        </>
      )
  };
  
  export default Home;