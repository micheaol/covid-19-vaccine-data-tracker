import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/actions/action';
import covid from '../images/covid.svg';
import Navbar from './Navbar';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.vaccine[0].All);
  useEffect(() => {
    if (country.length === 0) dispatch(fetchCountryDetails());
  }, []);
  return (
    <div>
      <Navbar title={country.country} />
      <div className="d-flex align-items-center justify-content-evenlymain-card detail-img">
        <img src={covid} alt="covid virus" />
      </div>
      <div className="d-flex align-items-center justify-content-around filter sorted-bar">
        <p>COUNTRY BREAKDOWN</p>
      </div>
    </div>
  );
};

export default CountryDetail;
