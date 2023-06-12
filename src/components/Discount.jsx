import React from 'react'
import "./Discount.css"
import Header from './Header'
import OlasAdorno from './OlasAdorno'
import ProductosDiscount from './ProductosDiscount'

const Discount = () => {
  return (
    <div className='paginaDescuento'>
  <div className='pantallaDescuento'>
    <Header/>
      <div className='descuentos'>
      <div><span>Descuentos</span></div>
      <div><h15>SweetPop</h15></div>
      <div className='linea'></div>
      </div>
    <div className='foto2Descuento'>
      <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
    </div>
    </div>
    <OlasAdorno/>
    <ProductosDiscount/>
    <div className='olasDes'>
    <OlasAdorno/>
    </div>
    
    
    
  
</div>

  )
}

export default Discount