import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='cabezera'> 
         <div className='menu'>
                  <div className='linea3'></div>
                  <div className='linea2'></div>
                  <div className='linea1'></div>
          </div>
              <div className='logo'>
                      <img src="src/assets/images/logo.jpg" alt="" />
                  </div>
        <button>Iniciar Sesion </button>
    </div>

  )
}

export default Header