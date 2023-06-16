import React from 'react';
import './ProductosSale.css';
import producto from '../assets/chocolates.json';

const ProductosSale = (props) => {
  const productosCategorias=props.productosCategorias;
  return (
    <div className='venta'>
{/* Aqui se le llama a la categoria de los chocolates*/}
      {productosCategorias.map((item) => (
        /*aqui se le asigna una clave unica */ 
        <div key={item.id}>
            
            <div className='fotetos'>
    {/* Aqui se le llama al nombre de los chocolates*/}
              <p>{item.nombre}</p>
    {/* Aqui se le llama a la imagen de los chocolates*/}
              <img src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${item.url}`} alt="" />
            </div>        
        </div> 
      ))}
    </div>
  );
};

export default ProductosSale;
