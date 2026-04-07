import React from 'react'
import "./App.css"
//importa
import Inicio from "./pages/Inicio"
import SeccionPrincipal from "./pages/seccionPrincipal";
import SeccionSecundaria from "./pages/seccionSecundaria";
import Aside from "./pages/Aside"
import Footer from './pages/Footer'
const App = () => {
  return (
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
