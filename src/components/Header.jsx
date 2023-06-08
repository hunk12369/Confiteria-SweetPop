import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='cabezera'> 
    <div className='logo'>
                      <img src="src/assets/images/logo.jpg" alt="" />
                  </div>
                   <button>
        <h3>Iniciar sesion</h3>
        </button>
         <div className='menu'>
                  <div className='linea3'></div>
                  <div className='linea2'></div>
                  <div className='linea1'></div>
              </div>
              

    </div>
  )
}

export default Header