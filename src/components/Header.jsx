import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <button>
        <h3>Iniciar sesion</h3>
        </button>
    </div>

  )
}
