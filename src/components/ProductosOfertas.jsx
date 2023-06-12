import React from 'react';
import "./ProductosOfertas.css";
import producto from "../assets/producto.json";

const ProductosOfertas = () => {
  return (
    <div className='CatalogoOfertas'>
      {producto.map((item) => (
        <div className={`ct${item.id}`} key={item.id}>
          <br></br>
          <div className={`p${item.id}`}>
            <img src={item.imgsrc} alt="" />
            <p>{item.name}</p>
          </div>
          <p>{item.text}</p>
           <img src={item.imgsrc2} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProductosOfertas;