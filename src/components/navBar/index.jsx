
import './style.css'
import { Link } from "react-router-dom"
import {AiTwotoneHome} from "react-icons/ai"


function NavBar() {

    return (
        <>
            <header className="header">
                <Link to={'/'}>
                    <a className="logo"><img src="/src/components/img/ENPCT_Logo.png" alt="Logo da ENPCT" /></a>
                </Link>
                <nav className="navbar">
                    <ul>
                        <Link to={'/'}><li className="icon"><a ><AiTwotoneHome /></a></li></Link>
                        <Link to={'/sobre'}><li><a >Sobre Nós</a></li></Link>
                        <Link to={'/servicos'}><li><a >Serviços</a></li></Link>
                        <Link to={'/noticias'}><li><a >Notícias</a></li></Link>
                        <Link to={'/parques'}><li><a >Parques</a></li></Link>
                        <Link to={'/contacto'}><li><a >Contacto</a></li></Link>
                        <Link to={'/galeria'}><li><a >Galeria</a></li></Link>
                        <Link to={'/documentos'}><li><a >Documentos</a></li></Link>
                        <li><a href="#">EN</a></li>
                    </ul>

                </nav>
                <div className="login">
                    <a href="#">Login</a>
                </div>
            </header>
        </>
    )
};

export default NavBar;