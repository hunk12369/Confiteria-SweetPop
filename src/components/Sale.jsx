import React from 'react'
import Back from './Back'
import OlasAdorno2 from './OlasAdorno2'
import ProductosSale from './ProductosSale'
import "./Sale.css"
const Sale = () => {
  return (
    <div className='paginaDescuento2'>
    <div className='pantallaDescuento2'>
    <Back/>
        <div className='descuentos'>
        <h1 className="Nombresito3">Usuario X</h1>
        <span className='sub'>¿Se te antoja algo?</span>
        </div>
      <div className='foto2Descuento'>
        <img src="src/assets/images/cinamonPastel.png" alt=''/>
      </div>
      <span className='sub2'>SweetPop</span>
      </div>
      <OlasAdorno2/>
      <ProductosSale/>
      
      
    
  </div>
  )
}

export default Sale