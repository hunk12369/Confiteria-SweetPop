import React from 'react'
//librerias del slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./SliderGeneral.css"

const SliderGeneral = (props) => {
  const {categorias}= props;
  const puntos=props.puntos;
  const flechas=props.flechas;
  //
  // Componente de flecha personalizado para la flecha "Anterior"
  const PrevArrow = (props) => (
    <div
      className="custom-prev-arrow"
      onClick={props.onClick}
    >
    </div>
  );

  // Componente de flecha personalizado para la flecha "Siguiente"
  const NextArrow = (props) => (
    <div
      className="custom-next-arrow"
      onClick={props.onClick}
    >
    </div>
  );
  //configuración para que el slider sea responsive
  const configuracion = {
    dots: puntos,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:flechas,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
          {categorias.map(item => (
              <img key={item.id} src={item.linkImg} alt={item.descripcion} />
          ))}
          </Slider>
    </div>
  )
}

export default SliderGeneral