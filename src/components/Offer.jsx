import React from 'react'
import Header from './Header'
import "./Offer.css"
import OlasAdorno from './OlasAdorno'
import ProductosOfertas from './ProductosOfertas'
const Offer = () => {
  return (
    <div className='paginaOfertas'>
         <div className='pantallaOfertas'>
           <Header/>
        <div className='ofertas'>
          <div className='bonito'>
          <div><span>Ofertas</span></div>
          <div className='Foto1Ofertas'>
        <img src="src/assets/images/Descuento.png" alt="" />
          </div>
        </div> 
        <div><h8>SweetPop</h8></div>
        <div className='linea'></div>
        </div> 
        <div className='foto1Categorias'>
        <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
        </div>
        <div className='Tiempo'>
        <p>OFERTAS DE LA SEMANA del 1 al 7 de mayo </p>
        </div>
        </div>
        <OlasAdorno/>
        <ProductosOfertas/>
        <div className='olas2'>
          <OlasAdorno/>
        </div>
  
    </div>
  )
}

export default Offer