/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacinated, fetchCountry } from '../redux/thunk/api';
import CountryCard from './CountryCard';
import '../App.css';

const Home = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.vaccine);

  const getCountry = (e) => {
    const vaccinated = e.target.parentNode.parentNode.parentNode;
    console.log('Hello from home', vaccinated);
    const vaccineId = vaccinated.getAttribute('data-id');
    dispatch(fetchCountry(vaccineId));
  };
  useEffect(() => {
    dispatch(fetchVacinated());
  }, []);
  return (
    <div className="home-wrapper row">
      {reports &&
        reports.map((vaccine) => (
          <CountryCard
            vaccine={vaccine}
            key={vaccine.All.country}
            getCountry={getCountry}
          />
        ))}
    </div>
  );
};

export default Home;
