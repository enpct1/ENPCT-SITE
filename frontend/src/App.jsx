import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home'
import Noticias from './containers/noticias'
import Parques from './containers/parques'
import Contacto from './containers/contacto'
import Sobre from './containers/sobre'
import Servicos from './containers/servicos'
import NavBar from './components/navBar';
import Footer from './components/footer';


function App() {

  return (
    <div className="App">
     {/*<NavBar/>*/}
      <Home/>
    <Footer />
    </div>
  )
}

export default App;
