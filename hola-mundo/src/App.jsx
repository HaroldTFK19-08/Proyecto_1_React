import React from 'react'
import "./App.css"
//importamos los componentes de nuestra pagina web
import Inicio from "./pages/Inicio"
import SeccionPrincipal from "./pages/seccionPrincipal";
import SeccionSecundaria from "./pages/seccionSecundaria";
import Aside from "./pages/Aside"
import Footer from './pages/Footer'
const App = () => {
  return (
    //dentro de un div esta la estructura de mi pagina web
    <div>  
      <Inicio /> 
      <div className='div1'>
        <main className='partecentral'>
          <SeccionPrincipal />
          <SeccionSecundaria />
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  )
}
export default App
