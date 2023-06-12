import React, { useState } from 'react';
import './Menu.css';
import menu from "../assets/menu.json"
import { NavLink } from 'react-router-dom';
const Menu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menuContainer ${isOpen ? 'open' : ''}`}>
      <div className='equis' onClick={onClose}/>
      
      <div className='menuContent'>
          <div className='nav'>
            {menu.map((item) => (
              <div className={`var${item.id}`} key={item.id}>
                <NavLink to={item.pagina}>
                  <div className='boneto'>
                    <img src={item.imgsrc} alt='' />
                    <p>{item.text}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  );
};

export default Menu;






