import React, { useState } from 'react';
import './Header.css';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='logo'>
      <NavLink to="/">
        <img src="src/assets/images/logo.jpg" alt="" />
      </NavLink>
      </div>
      <NavLink to="/login">
        <button>
          <h3>Iniciar sesión</h3>
        </button>
      </NavLink>
      <div className='menu' onClick={handleToggleMenu}>
        <div className='linea3'></div>
        <div className='linea2'></div>
        <div className='linea1'></div>
      </div>
      {isMenuOpen && <Menu onClose={handleToggleMenu} />}
    </div>
  );
};

export default Header;