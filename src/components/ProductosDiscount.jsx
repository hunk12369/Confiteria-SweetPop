import React from 'react'
import "./ProductosDiscount.css"
import producto from "../assets/descuento.json";
const ProductosDiscount = () => {
  return (
    <div className='descuento'>
      {producto.map((item) => (
        <div className={`de${item.id}`} key={item.id}>
          <br></br>
          <div className={`p${item.id}`}>
          <br></br> 
            <img src={item.imgsrc} alt="" />
            <br></br>
          </div>
          <br></br>
          <button>{item.name}</button>
          <br></br>
          <div className='tez'>
          <p>{item.text}</p>
          </div>
          <div className='etiqueta'>
          <img src={item.imgsrc2} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductosDiscount