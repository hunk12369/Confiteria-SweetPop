import React from 'react'
import "./Servicios.css"
import SliderGeneral from './SliderGeneral'
//json de categorias

import dataDescuentos from "../assets/dataDescuentos.json";
import dataOfertas from "../assets/dataOfertas.json";

const Servicios = (props) => {
  const categorias=props.categorias;
  return (
    <div>
        {console.log(categorias)}
        <div className='titulos'>
            Categorias
        </div>
        <SliderGeneral categorias={categorias} puntos={true} pagina="/categorias"/>
        <div className='titulos'>
            Descuentos
        </div>
        <SliderGeneral categorias={dataDescuentos} flechas={true} pagina="/descuentos"/>
        <div className='titulos'>
            Ofertas
        </div>
        <SliderGeneral categorias={dataOfertas} puntos={true} flechas={true} pagina="/ofertas"/>
    </div>
    
  )
}

export default Servicios