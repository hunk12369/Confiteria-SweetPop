import React from 'react'
import "./ProductosDiscount.css"
import producto from "../assets/descuento.json"
const ProductosDiscount = (props) => {
  const descuentos = props.descuentos;
  return (
    <div className='descuento'>
      {descuentos.map((item) => (
        <div className={`de${item.id}`} key={item.id}>
          <br></br>
          <div className='fotitos'>
            <img key={item.id} src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${item.Url}`} alt="" />
            <img src="src/assets/images/30porciento.png" alt="" />
          </div>
          <br></br>

          <br></br>
          
          <button>{item.Producto}</button>
          <br></br>
          <div className='tez'>
          <p>{item.Descripcion}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

export default ProductosDiscount