import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './pages/Home'
import Login from './components/forms/Login';
import RegistrationForm from './components/forms/RegistrationFormorms';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        
      </Routes>
    </Router>
  );
};

export default App;
