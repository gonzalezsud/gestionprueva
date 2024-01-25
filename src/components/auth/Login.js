import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '..//..//assets/images/logo.png';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Reemplaza esta condición con tu lógica de validación de inicio de sesión
    const credentialsAreValid = true; // Esta es una condición de ejemplo
  
    if (credentialsAreValid) {
      navigate('/pre-diagnostico');
    } else {
      console.log('Credenciales Incorrectas');
      // Manejo de errores, por ejemplo, mostrar un mensaje al usuario.
    }
  };
  return (
    <div className="container mx-auto my-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body text-center"> {/* Text-center para centrar todo el contenido */}
              <img className="mb-4 mx-auto h-12 w-auto" src={logo} alt="Company Logo" style={{ maxWidth: '200px' }} />
              <h3 className="card-title">Sign in</h3>
              <h6 className="mb-4">to access Community Lab Alliance</h6>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 rounded-md shadow-sm -space-y-px">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-success">
                    Next
                  </button>
                </div>
                <div className="text-center">
                  <p>Don't have an account? <Link to="/signup" className="text-success">Sign Up</Link></p>
                  {/* Utilizamos handleForgotPassword cuando el usuario hace clic en 'Forgot Password' */}
                  <button onClick={handleForgotPassword} className="btn btn-link text-success p-0">Forgot Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
