import React from 'react'
//librerias del slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./SliderGeneral.css"
import { NavLink } from 'react-router-dom';

const SliderGeneral = (props) => {
  const categorias= props.categorias;
  const puntos=props.puntos;
  const flechas=props.flechas;
  const pagina=props.pagina;
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
      {console.log(categorias)}
      <Slider {...configuracion}>
      {categorias.map(item => (
          <NavLink to={pagina} key={item.id}>
            <img key={item.id} src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${item.url}`} alt={item.nombre} />
          </NavLink>
      ))}
      </Slider>
    </div>
  )
}

export default SliderGeneral