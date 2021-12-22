/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacinated, fetchCountry, sortCountry } from '../redux/thunk/api';
import CountryCard from './CountryCard';
import africa from '../images/africa.svg';
import '../App.css';
import Navbar from './Navbar';
import { filterCountry } from '../redux/actions/action';

const Home = () => {
  const [searchCountry, setSearchCountry] = useState('');
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.vaccine);
  const peopleVaccinated = [];
  let totalVaccinated = 0;
  reports.map((total) => peopleVaccinated.push(total.All.people_vaccinated));
  for (let i = 0; i < peopleVaccinated.length; i += 1) {
    totalVaccinated += peopleVaccinated[i];
  }

  const getCountry = (e) => {
    const vaccinated = e.target.parentNode.parentNode.parentNode;
    const vaccineId = vaccinated.getAttribute('data-id');
    dispatch(fetchCountry(vaccineId));
  };

  const filterCountryByName = (e) => {
    const countryId = e.target.value;
    setSearchCountry(countryId);
  };

  useEffect(() => {
    dispatch(fetchVacinated());
  }, []);
  return (
    <div data-testid="home">
      <Navbar title="Africa" />
      <div className="hero-wrapper">
        <div className="hero-img-display">
          <img src={africa} alt="map of africa" />
        </div>
        <div className="header-wrapper">
          <h1>Africa</h1>
          <h3>{` ${totalVaccinated.toLocaleString()} Vaccinated`}</h3>
        </div>
      </div>
      <div className="sorted-bar">
        <h1>SORTED BY COUNTRY</h1>
        <div className="input-holder">
          <input type="text" placeholder="Search country name" onChange={filterCountryByName} />
        </div>
      </div>
      <div className="home-wrapper row g-0">
        {reports
        && reports.filter((item) => item.All.country.includes(searchCountry)).map((vaccine) => (
          <CountryCard
            vaccine={vaccine}
            key={vaccine.All.country}
            getCountry={getCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
