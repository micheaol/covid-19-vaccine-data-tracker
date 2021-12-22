import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/actions/action';
import covid from '../images/covid.svg';
import Navbar from './Navbar';
import '../App.css';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.vaccine[0].All);
  useEffect(() => {
    if (country.length === 0) dispatch(fetchCountryDetails());
  }, []);
  return (
    <div data-testid="detail-page">
      <Navbar title={country.country} />
      <div className="d-flex align-items-center justify-content-evenlymain-card detail-img">
        <img src={covid} alt="covid virus" />
      </div>
      <div className="d-flex align-items-center justify-content-around filter sorted-bar">
        <p>COUNTRY BREAKDOWN</p>
      </div>
      <div className="container-fluid p-0 list-wrapper">
        <ul className="list-group list-group-vartical-sm list-detail">
          <li className="list-group-item d-flex d-flex justify-content-between py-3">
            Population:
            <span>{country.population.toLocaleString()}</span>
          </li>
          <li className="list-group-item d-flex d-flex justify-content-between py-3">
            Administered:
            <span>{country.administered.toLocaleString()}</span>
          </li>
          <li className="list-group-item d-flex d-flex justify-content-between py-3">
            Partially vaccinated:
            <span>{country.people_partially_vaccinated.toLocaleString()}</span>
          </li>
          <li className="list-group-item d-flex d-flex justify-content-between py-3">
            People vaccinated:
            <span>{country.people_vaccinated.toLocaleString()}</span>
          </li>
          <li className="list-group-item d-flex d-flex justify-content-between py-3">
            Life expectancy:
            <span>{country.life_expectancy}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryDetail;
