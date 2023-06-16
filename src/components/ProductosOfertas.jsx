import React from 'react';
import "./ProductosOfertas.css";
import producto from "../assets/producto.json";

const ProductosOfertas = (props) => {
  const ofertas=props.ofertas;
  return (
    <div className='CatalogoOfertas'>
      {ofertas.map((item) => (
        <div className={`cardProductoOferta`} key={item.id}>
          <br></br>
          <div className={`productoOferta`}>
            <img src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${item.Url}`} alt="" />
            <p>{item.Producto}</p>
          </div>
          <p>{item.Descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductosOfertas;