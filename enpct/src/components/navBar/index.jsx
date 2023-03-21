
import './style.css'

function NavBar() {

    return (
        <>
           <header className="header">
            <a href="#" className="logo"><img src="./img/ENPCT_Logo.png" alt="Logo da ENPCT" /></a>
            
            <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Servicos</a></li>
                <li><a href="#">Parques</a></li>
                <li><a href="#">Sobre nos</a></li>
                <li><a href="#">Contacto</a></li>
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