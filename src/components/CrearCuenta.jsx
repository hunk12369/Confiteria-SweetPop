import React, { useState } from 'react';

const CrearCuenta = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro o enviar los datos al servidor
  };

  const handleToggleForm = () => {
    // Lógica para cambiar entre la vista de creación de cuenta e inicio de sesión
  };

  return (
    <div className="container">
      <div className="forms">
        <div className="form signup">
          <span className="title">Crear Cuenta</span>
          <div className="clear"></div>
          <div className="text">Por favor rellenar todos los campos de abajo</div>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" placeholder="Nombre Completo" required />
              <i className="uil uil-user"></i>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Teléfono" required />
              <i className="uil uil-phone"></i>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Correo Electrónico" required />
              <i className="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                className="password"
                placeholder="Contraseña(Al menos 5 caracteres)"
                required
              />
              <i className="uil uil-lock"></i>
            </div>
            <div className="input-field">
              <input
                type={showPassword ? 'text' : 'password'}
                className="password"
                placeholder="Confirmar Contraseña"
                required
              />
              <i className="uil uil-lock icon"></i>
              <i
                className={`uil ${showPassword ? 'uil-eye' : 'uil-eye-slash'} showHidePw`}
                onClick={handleTogglePassword}
              ></i>
            </div>

            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="termCon" />
                <label htmlFor="termCon" className="text">
                  Acepto los términos y condiciones
                </label>
              </div>
            </div>

            <div className="input-field button">
              <input type="submit" value="Signup" />
            </div>
          </form>

          <div className="login-signup">
            <span className="text">
              ¿Ya tienes una cuenta?
              <a href="#" className="login-link" onClick={handleToggleForm}>
                Inicia Sesión
              </a>
            </span>
          </div>
          <div className="clear"></div>

          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bx bxl-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
