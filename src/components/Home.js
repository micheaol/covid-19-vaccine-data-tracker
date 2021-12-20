/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchVacinated from '../redux/thunk/api';
import CountryCard from './CountryCard';

const Home = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.report);
  console.log('Hello from home', reports);

  useEffect(() => {
    dispatch(fetchVacinated());
  }, []);
  return (
    <div>
      {reports &&
        reports.map((vaccine) => (
          <CountryCard vaccine={vaccine} key={vaccine.All.country} />
        ))}
    </div>
  );
};

export default Home;
