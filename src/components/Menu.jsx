import React, { useState } from 'react';
import './Menu.css';
import menu from "../assets/menu.json"
const Menu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menuContainer ${isOpen ? 'open' : ''}`}>
      <div className='overlay' onClick={onClose} />
      <div className='menuContent'>
          <div className='nav'>
            {menu.map((item) => (
              <div className={`var${item.id}`} key={item.id}>
                <div className='boneto'>
                  <img src={item.imgsrc} alt='' />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  );
};

export default Menu;






