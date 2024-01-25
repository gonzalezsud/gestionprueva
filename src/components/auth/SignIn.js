import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '..//..//assets/images/logo.png';

const SignIn = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm('¿Estás seguro de que deseas continuar?');
        
        if (confirmed) {
            // Si el usuario confirma, implementa la lógica para manejar la recuperación de contraseña aquí
            console.log('Password reset requested for', email);
        } else {
            // Si el usuario cancela, no se realiza ninguna acción
            console.log('Password reset request canceled');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center">
                <img src={logo} alt="Company Logo" className="mb-4" style={{ maxWidth: '200px' }} />
                <div className="card shadow p-4 mb-5 bg-body rounded" style={{ width: '22rem' }}>
                    <div className="card-body">
                        <h2 className="card-title text-primary">Sign in</h2>
                        <p className="text-secondary">to access Community Lab Alliance</p>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <button className="btn btn-success w-100" onClick={handleSubmit}>
                            Next
                        </button>
                        <div className="mt-4">
                            <Link to="/signup" className="text-primary pe-2">
                                Don't have an account? Sign Up
                            </Link>
                            <Link to="/forgot-password" className="text-primary">
                                Forgot Password
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
