import React from 'react'
import Header from './Header'
import "./Offer.css"
import OlasAdorno from './OlasAdorno'
import ProductosOfertas from './ProductosOfertas'
const Offer = () => {
  return (
    <div className='paginaOfertas'>
         <div className='pantallaOfertas'>
        <div className='tituloOffer'><span>Ofertas</span></div>
        <div className='Foto1Ofertas'>
        <img src="src/assets/images/Descuento.png" alt="" />
        </div>
        <div className='subtituloOferr'><p>SweetPop</p></div>
        <div className='linea'></div>
        <div className='foto1Categorias'>
        <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
        </div>
        <div className='Tiempo'>
            <p>OFERTAS DE LA SEMANA del 1 al 7 de mayo </p>
        </div>
        </div>
        <div className='olasOfertas'>
        <OlasAdorno/>
        </div>
        <Header/>
        <ProductosOfertas/>
        <div className='olasCategorias2'>
        <OlasAdorno/>
    </div>
    </div>
  )
}

export default Offer