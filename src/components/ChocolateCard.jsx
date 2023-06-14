import React from 'react'
import "./ChocolateCard.css"
import chocolate from "../assets/ChocolateDescription.json"
import OlasAdorno3 from './OlasAdorno3'
import Back from './Back'
const ChocolateCard = () => {
  return (
    <div className='ventaChocolates'>
        <OlasAdorno3/>
        <Back/>
      {chocolate.map((item) => (
        <div className={item.id} key={item.id}>
      <h1 className='tituloChoco'>{item.name}</h1>
      <div className='boca'>
      <p>{item.text}</p>
      <img src={item.imgsrc} alt="" />
      <div className='precioChoco'>
      <span>{item.precio}</span>
      </div>
      </div>
      <div className='porciones'>
        <div className='boneneto'><div className='cuadritoM'></div><span>Porcion: {item.Porcion}</span></div>
        <div className='boneneto'><div className='cuadritoM'></div><span>Sabor: {item.Sabor}</span></div>
        <div className='boneneto'><div className='cuadritoM'></div><span>Tamaño: {item.Tamaño}</span></div>
        <div className='boneneto'><div className='cuadritoM'></div><span>Cantidad: {item.Cantidad}</span></div>
      </div>
      <span className='ingre'>Ingredientes</span>
        <p className='ingredientes'>{item.ingredientes}</p>
        </div>
      ))}
    </div>
  )
}

export default ChocolateCard