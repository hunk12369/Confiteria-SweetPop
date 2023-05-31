import React from 'react'
import "./Home.css"
import Servicios from '../components/Servicios'
import OlasAdorno from '../components/OlasAdorno'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
const Home = () => {
  
  return (
    <div>
      
      <div className='home-encabezado'>
        <h1>
          INICIO
        </h1>
        <h2>
          <span className='subrayado'>Sweet</span>Pop
        </h2>
        <img src="/src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt="imagne del home"></img>
      </div>
      <OlasAdorno/>

      <div className='servicios'>
        <Servicios/>
      </div>
      <Fotter/>
      
    </div>
  )
}

export default Home