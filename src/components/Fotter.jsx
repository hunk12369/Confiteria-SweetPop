import React from 'react'
import "./Fotter.css"
const Fotter = () => {
  return (
    <div className='datos'>
        <div className='ubicacion'>
          <img src='src/assets/images/LOGO SP.png' alt=''/>
        <b>av.Hernando Siles,calle 15 de Calacoto</b>
        <p>72551345</p>
        <p>mailto:sweetpop.lapaz@gmail.com</p>
        </div>
        <div className='linea6'></div>
        <div className='redes'>
            <p>facebook</p>
            <p>twitter</p>
            <p>linkedin</p>
            <p>instagran</p>
        </div>
        <div className='linea7'></div>
        <p className=' derechos'>© 2022 SweetPop todos los derechos reservados</p>
    </div>

  )
}

export default Fotter