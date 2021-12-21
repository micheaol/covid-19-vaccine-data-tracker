/* eslint-disable guard-for-in */
/* eslint-disable space-before-blocks */
/* eslint-disable no-restricted-syntax */
/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacinated, fetchCountry } from '../redux/thunk/api';
import CountryCard from './CountryCard';
import africa from '../images/africa.svg';
import '../App.css';

const Home = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.vaccine);
  const peopleVaccinated = [];
  let totalVaccinated = 0;
  reports.map((total) => peopleVaccinated.push(total.All.people_vaccinated));
  for (let i = 0; i < peopleVaccinated.length; i += 1){
    totalVaccinated += peopleVaccinated[i];
  }

  console.log('Total vacinated', totalVaccinated);

  const getCountry = (e) => {
    const vaccinated = e.target.parentNode.parentNode.parentNode;

    const vaccineId = vaccinated.getAttribute('data-id');
    dispatch(fetchCountry(vaccineId));
  };
  useEffect(() => {
    dispatch(fetchVacinated());
  }, []);
  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero-img-display">
          <img src={africa} alt="map of africa" />
        </div>
        <div className="header-wrapper">
          <h1>Africa</h1>
          <h3>{` ${totalVaccinated} Vaccinated`}</h3>
        </div>
      </div>
      <div className="home-wrapper row g-0">
        {reports &&
          reports.map((vaccine) => (
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
