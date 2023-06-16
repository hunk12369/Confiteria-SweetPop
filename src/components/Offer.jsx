import React from 'react'
import Header from './Header'
import "./Offer.css"
import OlasAdorno from './OlasAdorno'
import ProductosOfertas from './ProductosOfertas'
const Offer = (props) => {
  const ofertas=props.ofertas;
  return (
    <div className='paginaOfertas'>
        <div className='pantallaOfertas'>
          {console.log(ofertas)}
          <div className='ofertas'>
            <div className='bonito'>
              <div><span>Ofertas</span></div>
              <div>
                <img src="src/assets/images/Descuento.png" alt="" />
              </div>
            </div> 
            <div><h6>SweetPop</h6></div>
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
        <ProductosOfertas ofertas={ofertas}/>
        <div className='olas2'>
          <OlasAdorno/>
        </div>
  
    </div>
  )
}

export default Offer