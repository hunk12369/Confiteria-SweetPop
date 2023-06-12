import React from 'react'
import "./ProductosReview.css"
import producto from "../assets/resenas.json";
const ProductosReview = () => {
  return (
    <div className='resenas'>
      {producto.map((item) => (
        <div className={`pr${item.id}`} key={item.id}>
          <br></br>
          <div className={`p${item.id}`}>
          <br></br> 
            <img src={item.imgsrc} alt="" />
            <br></br>
          </div>
          <br></br>
          <button>{item.name}</button>
          <br></br>
          <div className='ez'>
          <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductosReview
