import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './containers/home'
import Noticias from './containers/noticias'
import Parques from './containers/parques'
import Contacto from './containers/contacto'
import Sobre from './containers/sobre'
import Servicos from './containers/servicos'
import NavBar from './components/navBar'
import Footer from './components/footer'
import Galeria from './containers/galeria'
import Documentos from './containers/documentos'
import NavBarWeather from './components/navBarWeather/navBarWeather'





function App() {

  return (
    <div className="App">
      {/* <NavBarWeather />   */}
       <NavBar />
      

      <Routes>
        
        <Route index path='/' element={<Inicio />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/parques' element={<Parques />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/documentos' element={<Documentos />} />

      </Routes>
      <Footer />
  
    </div>
  )
}

export default App;
