// ForgotPassword.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementa la lógica para manejar la recuperación de contraseña aquí
        console.log('Password reset requested for', email);
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={logo} alt="Company Logo" className="mb-4" style={{ maxWidth: '200px' }} />
                            <h3 className="card-title mb-4">Forgot Password</h3>
                            <form onSubmit={handleSubmit}>
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
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-success">
                                        Next
                                    </button>
                                </div>
                                <div className="text-center mt-3">
                                    <Link to="/signin" className="text-success">Back to Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
