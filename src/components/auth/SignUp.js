import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '..//..//assets/images/logo.png';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Registro:', { email, password, firstName, lastName });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card" style={{ borderRadius: '10px' }}>
            <div className="card-body text-center"> {/* Text-center para centrar todo el contenido */}
              <img src={logo} alt="Company Logo" className="mb-4" style={{ maxWidth: '200px' }} />              <h3 className="card-title text-center" style={{ color: '#333' }}>Sign Up</h3>
              <form onSubmit={handleSignUp}>
                {/* Email input */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Password input */}
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {/* First name input */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                {/* Last name input */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                {/* Submit button */}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn" style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                    Sign Up
                  </button>
                </div>
                {/* Sign in link */}
                <div className="text-center">
                  Already have an account? <Link to="/signin" style={{ color: '#4CAF50' }}>Sign In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
