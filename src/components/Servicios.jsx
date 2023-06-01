import React from 'react'
import "./Servicios.css"
import SliderGeneral from './SliderGeneral'
//json de categorias
import dataCategorias from '../assets/dataCategorias';
import dataDescuentos from "../assets/dataDescuentos.json";
import dataOfertas from "../assets/dataOfertas.json";

const Servicios = () => {
  return (
    <div>
        <div className='titulos'>
            Categorias
        </div>
        <SliderGeneral categorias={dataCategorias} puntos={true}/>
        <div className='titulos'>
            Descuentos
        </div>
        <SliderGeneral categorias={dataDescuentos} flechas={true}/>
        <div className='titulos'>
            Ofertas
        </div>
        <SliderGeneral categorias={dataOfertas} puntos={true} flechas={true}/>
    </div>
    
  )
}

export default Servicios