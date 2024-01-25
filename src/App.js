import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/auth/Login'; // Asegúrate de que la ruta sea correcta
import SignUp from './components/auth/SignUp'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import EnterOTP from './components/auth/EnterOTP';
import ForgotPassword from './components/auth/ForgotPassword';
import PreDiagnostico from './components/PreDiagnostico';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta raíz que carga el componente Login */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/enter-otp" element={<EnterOTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pre-diagnostico" element={<PreDiagnostico />} />


        {/* Añade más rutas según sea necesario */}
        {/* Puedes añadir una ruta comodín para manejar rutas no encontradas */}
      </Routes>
    </Router>
  );
}

export default App;
