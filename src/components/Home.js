/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVacinated, fetchCountry } from '../redux/thunk/api';
import CountryCard from './CountryCard';

const Home = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.vaccine);
  console.log('Hello from home', reports);

  const getCountry = (e) => {
    const vaccinated = e.target.parentNode;
    const vaccineId = vaccinated.getAttribute('data-id');
    dispatch(fetchCountry(vaccineId));
  };
  useEffect(() => {
    dispatch(fetchVacinated());
  }, []);
  return (
    <div>
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
