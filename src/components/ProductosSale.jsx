import React from 'react';
import './ProductosSale.css';
import producto from '../assets/chocolates.json';

const ProductosSale = () => {
  return (
    <div className='venta'>
      {producto.map((item) => (
        <div className={item.id} key={item.id}>
            <div className='fotetos'>
              <p>{item.text}</p>
              <img src={item.imgsrc} alt="" />
            </div>        
        </div> 
      ))}
    </div>
  );
};

export default ProductosSale;
