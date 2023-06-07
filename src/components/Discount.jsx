import React from 'react'
import "./Discount.css"
import Header from './Header'
import OlasAdorno from './OlasAdorno'
import ProductosDiscount from './ProductosDiscount'
const Discount = () => {
  return (
        <div className='paginaDescuento'>
  <div className='pantallaDescuento'>
    <div className='tituloDescuento'>
      <span>Descuentos</span>
    </div>
    <div className='subtituloDescuento'>
      <p>SweetPop</p>
    </div>
    <div className='linea'></div>
    <div className='foto2Descuento'>
      <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
    </div>
  </div>
  <Header/>
  <div className='olasDescuento'>
    <OlasAdorno/>
  </div>
  <div className='olasCategorias2'>
    <OlasAdorno/>
  </div>
  <ProductosDiscount/>
</div>
  )
}

export default Discount