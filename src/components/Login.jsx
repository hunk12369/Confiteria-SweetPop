import React, { useState } from 'react';
import './Login.css';
import Fotter1 from './Fotter1';
import { NavLink } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={`forms ${isSignUp ? 'signup-active' : ''}`}>
      <div className="form-login">
        <span className="title1">Iniciar Sesión</span>
        <div className="text01">Por favor inicia sesión para continuar</div>

        <form onSubmit={handleSubmit}>

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
        </form>

        <a className="text-contraseña">
          ¿Olvidaste tu contraseña?
        </a>

        <div className="input-login-button01">
          <input type="submit" value="Login" />
        </div>

        <div className="login-signup">
          <span className="text03">
            ¿No tienes una cuenta?
            <NavLink to="/register">
              ¡Regístrate!
            </NavLink>
          </span>
        </div>
        <div className='fotter-adorno'></div>
      </div>
    </div>
  );
};

export default Login;
