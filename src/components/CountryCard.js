/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-quotes */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import React from 'react';

const CountryCard = ({ vaccine, getCountry }) => {
  return (
    <div data-id={vaccine.All.country}>
      <h1>{`Country name: ${vaccine.All.country}`}</h1>
      <Link to={`/${vaccine.All.country}`} onClick={getCountry} type='submit'>
        Click me
      </Link>
    </div>
  );
};

export default CountryCard;
