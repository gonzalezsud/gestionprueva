import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const EnterOTP = () => {
  const [otp, setOtp] = useState('');
  const [usePassword, setUsePassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const navigate = useNavigate();


  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (usePassword) {
      console.log('Password Submitted', password);
      // Aquí se manejaría la lógica de verificación de la contraseña
      // Supongamos que la contraseña es válida y quieres redirigir al usuario
      navigate('/some-path-after-password-verification'); // Usa navigate aquí
    } else {
      console.log('OTP Submitted', otp);
      // Aquí se manejaría la lógica de verificación del OTP
      // Supongamos que el OTP es válido y quieres redirigir al usuario
      navigate('/some-path-after-otp-verification'); // Usa navigate aquí
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body text-center">
              <img src={logo} alt="Company Logo" className="mb-4" style={{ maxWidth: '200px' }} />
              <h3 className="card-title mb-4">{usePassword ? 'Sign in with Password' : 'Enter OTP'}</h3>
              <form onSubmit={handleSubmitOtp}>
                {usePassword ? (
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP sent to your email"
                      value={otp}
                      onChange={handleOtpChange}
                      required
                    />
                  </div>
                )}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-success">
                    {usePassword ? 'Sign in' : 'Verify OTP'}
                  </button>
                </div>
                <button
                  className="btn btn-link"
                  onClick={() => setUsePassword(!usePassword)}
                >
                  {usePassword ? 'Use OTP Instead' : 'Use Password Instead'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
