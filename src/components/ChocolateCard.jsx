import React, { useEffect, useState } from 'react'
import "./ChocolateCard.css"
import chocolate from "../assets/ChocolateDescription.json"
import OlasAdorno3 from './OlasAdorno3'
import Back from './Back'
import { useParams } from 'react-router'
import { getProductos } from '../services/Productos'
const ChocolateCard = () => {
  const {slug} = useParams();
  console.log(slug);
  const [apiProductos, setProductos] = useState([]);
  useEffect(() => {
    getProductos(slug).then((data) => {setProductos(data)})

  }, []);
  return (
    <div className='ventaChocolates'>
      {console.log(apiProductos)}
      {/* Aqui se le llama a cada chocolate*/}
        <OlasAdorno3/>
        <Back/>
      {apiProductos && (
      <div>
        <div className={apiProductos.id_producto} key={apiProductos.id_producto}>

            {/* Aqui se le llama al nombre a cada chocolate*/}
          <h1 className='tituloChoco'>{apiProductos.nombre}</h1>
          <div className='boca'>
              {/* Aqui se le llama a la descripcion a cada chocolate*/}
            <p>{apiProductos.informacion}</p>
            {/* Aqui se le llama a la imagen del chocolate*/}
            <img src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${apiProductos.url}`} alt="" />
            <div className='precioChoco'>
              {/* Aqui se le llama al precio de cada chocolate*/}
            <span>{apiProductos.precio}</span>
            </div>
          </div>
          <div className='porciones'>
            {/* Aqui se le llama a la sabor*/}
            <div className='boneneto'><div className='cuadritoM'></div><span>Sabor: {apiProductos.sabor}</span></div>
            {/* Aqui se le llama a la tamaño*/}
            <div className='boneneto'><div className='cuadritoM'></div><span>Tamaño: {apiProductos.tamaño}</span></div>
            {/* Aqui se le llama a la cantidad*/}
            <div className='boneneto'><div className='cuadritoM'></div><span>Cantidad: {apiProductos.cantidad}</span></div>
          </div>
          <span className='ingre'>Ingredientes</span>
          {/* Aqui se le llama a los ingredientes de cada chocolates*/}
            <p className='ingredientes'>{apiProductos.ingrediente}</p>
        </div>
      </div>
      )
      
      }
    </div>
  )
}

export default ChocolateCard