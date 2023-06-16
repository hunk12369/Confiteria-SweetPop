import React from 'react';
import './ProductosSale.css';
import producto from '../assets/chocolates.json';

const ProductosSale = () => {
  return (
    <div className='venta'>
{/* Aqui se le llama a la categoria de los chocolates*/}
      {producto.map((item) => (
        /*aqui se le asigna una clave unica */ 
        <div className={item.id} key={item.id}>
          
            <div className='fotetos'>
    {/* Aqui se le llama al nombre de los chocolates*/}
              <p>{item.text}</p>
    {/* Aqui se le llama a la imagen de los chocolates*/}
              <img src={item.imgsrc} alt="" />
            </div>        
        </div> 
      ))}
    </div>
  );
};

export default ProductosSale;
