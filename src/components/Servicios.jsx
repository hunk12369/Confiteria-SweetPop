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
        <SliderGeneral categorias={dataCategorias} />
        <div className='titulos'>
            Descuentos
        </div>
        <SliderGeneral categorias={dataDescuentos} />
        <div className='titulos'>
            Ofertas
        </div>
        <SliderGeneral categorias={dataOfertas} />
    </div>
    
  )
}

export default Servicios