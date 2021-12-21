/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [title, setTitle] = useState('Africa Continents');
  return (
    <div>
      <Navbar title={title} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exac path='/detail/:countryId' element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
