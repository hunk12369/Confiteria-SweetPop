import React, { useState } from 'react';
import './Cuenta.css';
import Fotter1 from './Fotter1';
import { NavLink } from 'react-router-dom';


const Cuenta = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [nombre, setnombre] = useState('');
  const [phone, setphone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contraseña, setcontraseña] = useState('');
  
  





  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handlenombreChange = (e) => {
    setnombre(e.target.value);
  };

  const handlephoneChange = (e) => {
    setphone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlecontraseñaChange = (e) => {
    setcontraseña(e.target.value);
  }; 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

   
    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
    console.log('nombre:', nombre);
    console.log('phone:', phone);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('contraseña:', contraseña);
    
    
  };

  return (
    <div className="container">
      <Fotter1/>
      
      <div className={`forms ${isSignUp ? 'signup-active' : ''}`}>
        <div className="form login">
        <div className='Logito'>
        <img src="./src/assets/images/logo.jpg" alt="" />
        </div>
        
          <span className="title">Crear Cuenta</span>
          <div className="clear"></div>
          <div className="text1">Por favor rellenar todos los campos de abajo</div>

          <form onSubmit={handleSubmit}>
          <div className="input-field1">
              <input
                type="nombre"
                className="nombre"
                placeholder="Nombre Completo"
                value={nombre}
                onChange={handlenombreChange}
                required  
            />
            <img src="./src/assets/images/Human.jpg" alt='' />
            </div>


            <div className="input-field2">
              <input
                type="phone"
                className="phone"
                placeholder="Telefono"
                value={phone}
                onChange={handlephoneChange}
                required  
            />
            <img src="./src/assets/images/smartphone.jpg" alt='' />
            </div>

            <div className="input-field3">
              <input
                type="email"
                className="gmail"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
                required  
            />
            <img src="./src/assets/images/email.jpg" alt='' />
            </div>


            <div className="input-field4">
              <input
                type={showPassword ? 'text' : 'password'}
                className="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className='lock'>
              <img src="./src/assets/images/lock.jpg" alt='' />
              </div>
              <div className='eye'>
              <img src="./src/assets/images/eye.jpg" alt='' />
              </div>
            </div>

            <div className="input-field5">
              <input
                type="contraseña"
                className="contraseña"
                placeholder="Confirmar Contraseña"
                value={contraseña}
                onChange={handlecontraseñaChange}
                required  
            />
              <div className='lock'>
              <img src="./src/assets/images/lock.jpg" alt='' />
              </div>
              <div className='eye'>
              <img src="./src/assets/images/eye.jpg" alt='' />
              </div>
            </div>
        
          </form>

          <div className="input-field button">
            <input type="submit" value="Registrarse" />
          </div>

          <div className="login-signup">
            <span className="text003">
            ¿Ya tienes una cuenta?
              <NavLink to="/login">
                ¡Inicia Sesión!
              </NavLink>
            </span>
          </div>
          <div className="clear"></div>
          <div className="text4">Conéctate a través de:</div>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;


      