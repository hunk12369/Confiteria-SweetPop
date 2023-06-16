import React, { useState } from 'react';
import './Cuenta.css';
import Fotter1 from './Fotter1';
import { NavLink } from 'react-router-dom';
import { postUsuario } from '../services/Productos';


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
    const usuarioNuevo = {
      nombre: nombre,
      telefono: phone,
      correo_electronico: email,
      contrasena: password,
    };
    
    console.log(usuarioNuevo);
    postUsuario(usuarioNuevo);
  };

  return (
    <div className={`forms ${isSignUp ? 'signup-active' : ''}`}>
      <div className="form-cuenta">
        <span className="title">Crear Cuenta</span>
        <div className="text1">Por favor rellenar todos los campos de abajo</div>

        <form onSubmit={handleSubmit}>
          <div className="input-nombre">
            <img src="./src/assets/images/Human.jpg" alt='' />
            <input
              type="nombre"
              className="nombre"
              placeholder="Nombre Completo"
              value={nombre}
              onChange={handlenombreChange}
              required  
            />
          </div>


          <div className="input-phone">
            <img src="./src/assets/images/smartphone.jpg" alt='' />
            <input
              type="phone"
              className="phone"
              placeholder="Telefono"
              value={phone}
              onChange={handlephoneChange}
              required  
            />
          </div>

          <div className="input-email">
            <img src="./src/assets/images/email.jpg" alt='' />
            <input
              type="email"
              className="gmail"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
              required  
            />
          </div>


          <div className="input-password">
            <img src="./src/assets/images/lock.jpg" alt='' />
            <input
              type={showPassword ? 'text' : 'password'}
              className="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <img src="./src/assets/images/eye.jpg" alt='' />
          </div>

          <div className="input-passwordConfirm">
            <img src="./src/assets/images/lock.jpg" alt='' />
            <input
              type="contraseña"
              className="contraseña"
              placeholder="Confirmar Contraseña"
              value={contraseña}
              onChange={handlecontraseñaChange}
              required  
            />
            <img src="./src/assets/images/eye.jpg" alt='' />
          </div>
      
          <div className="input-field button">
            <input type="submit" value="Registrarse" />
          </div>
        </form>


        <div className="cuenta-login">
          <span>
          ¿Ya tienes una cuenta?
            <NavLink to="/login">
              ¡Inicia Sesión!
            </NavLink>
          </span>
        </div>
        <div className='fotter-adorno-cuenta'></div>
      </div>
    </div>
  );
};

export default Cuenta;


      