import React from 'react';
import './App.css';


import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/Signup';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
  );
}

export default App;