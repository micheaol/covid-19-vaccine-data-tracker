/* eslint-disable jsx-quotes */
import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import './App.css';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* <Navbar title="Africa Continents" /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exac path='/detail/:countryId' element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
