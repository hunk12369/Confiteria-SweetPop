import React from 'react'
import "./ChocolateCard.css"
import chocolate from "../assets/ChocolateDescription.json"
import OlasAdorno3 from './OlasAdorno3'
import Back from './Back'
const ChocolateCard = () => {
  return (
    <div className='ventaChocolates'>
      {/* Aqui se le llama a cada chocolate*/}
        <OlasAdorno3/>
        <Back/>
      {chocolate.map((item) => (
      <div className={item.id} key={item.id}>

        {/* Aqui se le llama al nombre a cada chocolate*/}
      <h1 className='tituloChoco'>{item.name}</h1>
      <div className='boca'>
        {/* Aqui se le llama a la descripcion a cada chocolate*/}
      <p>{item.text}</p>
      {/* Aqui se le llama a la imagen del chocolate*/}
      <img src={item.imgsrc} alt="" />
      <div className='precioChoco'>
        {/* Aqui se le llama al precio de cada chocolate*/}
      <span>{item.precio}</span>
      </div>
      </div>
      <div className='porciones'>
        {/* Aqui se le llama a la porcion*/}
        <div className='boneneto'><div className='cuadritoM'></div><span>Porcion: {item.Porcion}</span></div>
        {/* Aqui se le llama a la sabor*/}
        <div className='boneneto'><div className='cuadritoM'></div><span>Sabor: {item.Sabor}</span></div>
        {/* Aqui se le llama a la tamaño*/}
        <div className='boneneto'><div className='cuadritoM'></div><span>Tamaño: {item.Tamaño}</span></div>
        {/* Aqui se le llama a la cantidad*/}
        <div className='boneneto'><div className='cuadritoM'></div><span>Cantidad: {item.Cantidad}</span></div>
      </div>
      <span className='ingre'>Ingredientes</span>
      {/* Aqui se le llama a los ingredientes de cada chocolates*/}
        <p className='ingredientes'>{item.ingredientes}</p>
        </div>
      ))}
    </div>
  )
}

export default ChocolateCard