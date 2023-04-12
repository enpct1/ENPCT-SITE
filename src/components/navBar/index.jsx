import { FaBars } from 'react-icons/fa'
import './style.css'
import { Link } from "react-router-dom"




function NavBar() {


    return (
        <>
            <header className="header">
                <Link to={'/'}>
                    <a className="logo"><img src="/src/components/img/ENPCT_Logo.png" alt="Logo da ENPCT" /></a>
                </Link>
                <nav className="navbar">
                    <ul>
                        <Link to={'/'}><li><a >Inicio</a></li></Link>
                        <Link to={'/sobre'}><li><a >Sobre Nos</a></li></Link>
                        <Link to={'/servicos'}><li><a >Servicos</a></li></Link>
                        <Link to={'/noticias'}><li><a >Noticias</a></li></Link>
                        <Link to={'/parques'}><li><a >Parques</a></li></Link>
                        <Link to={'/contacto'}><li><a >Contacto</a></li></Link>
                        <Link to={'/galeria'}><li><a >Galeria</a></li></Link>
                        <Link to={'/documentos'}><li><a >Documentos</a></li></Link>
                    </ul>
                    <a href="#" className='btn-login'> Login </a>
                    <div className="toggle-btn">
                        <FaBars />
                    </div>
                </nav>

                {/*
                
                <div className="dropdown-menu open">
                    <Link to={'/'}><li><a >Inicio</a></li></Link>
                    <Link to={'/sobre'}><li><a >Sobre Nos</a></li></Link>
                    <Link to={'/servicos'}><li><a >Servicos</a></li></Link>
                    <Link to={'/noticias'}><li><a >Noticias</a></li></Link>
                    <Link to={'/parques'}><li><a >Parques</a></li></Link>
                    <Link to={'/contacto'}><li><a >Contacto</a></li></Link>
                    <Link to={'/galeria'}><li><a >Galeria</a></li></Link>
                    <Link to={'/documentos'}><li><a >Documentos</a></li></Link>
                    <li> <a href="#" className='btn-login'> Login </a></li>

                </div>
                 
                 */}


            </header>
        </>
    )
};

export default NavBar;