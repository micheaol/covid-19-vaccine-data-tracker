import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import './App.css';

function App() {
  return (
    <div data-testid="app-component">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exac path="/detail/:countryId" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
