import React from 'react'
//librerias del slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//js de categorias
import { dataCategorias } from '../assets/categorias';
import "./SliderGeneral.css"

const SliderGeneral = () => {
  //configuración para que el slider sea responsive
  const configuracion = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          //imagenes o slides a mostrar
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //Configuración flechas
  
  return (
    <div className='tarjeta'>
        <Slider {...configuracion}>
          {dataCategorias.map(item => (
            <img src={item.linkImg} alt="categoria-confiteria" />
          ))}
        </Slider>
    </div>
  )
}

export default SliderGeneral