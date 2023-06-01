import React, { useState } from 'react';
import './Login.css';


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
    <div className="container">
      <div className="logo">
        <img src="./src/assets/images/logo.jpg" alt="" />
      </div>

      <div className='Redes'>
        <img src="./src/assets/images/LogoGoogle.jpg" alt='' />
        <img src="./src/assets/images/LogoFb.jpg" alt=''/>
        <img src="./src/assets/images/LogoTT.jpg" alt=''/>
      </div>
      <div className='Iconos'>
        
      </div>




       
      
      <div className={`forms ${isSignUp ? 'signup-active' : ''}`}>
        <div className="form login">
        <div className='Logito'>
        <img src="./src/assets/images/logo.jpg" alt="" />
        </div>
        
          <span className="title">Iniciar Sesión</span>
          <div className="clear"></div>
          <div className="text1">Por favor inicia sesión para continuar</div>

          <form onSubmit={handleSubmit}>

          <div className="input-field1">
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



            <div className="input-field">
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

            

        
          </form>

          <div className="checkbox-text">
            <a href="#" className="text2">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="input-field button">
            <input type="submit" value="Login" />
          </div>

          <div className="login-signup">
            <span className="text3">
              ¿No tienes una cuenta?
              <a href="#" className="signup-link" onClick={handleToggleForm}>
                ¡Regístrate!
              </a>
            </span>
          </div>
          <div className="clear"></div>
          <div className="text4">Conéctate a través de:</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
