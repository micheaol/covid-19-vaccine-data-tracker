/* eslint-disable jsx-quotes */
/* eslint-disable arrow-body-style */
import React from 'react';

const CountryCard = ({ vaccine }) => {
  const getCountry = () => {
    console.log(vaccine.All.country);
  };
  return (
    <div>
      <h1>Hello from card</h1>
      <button onClick={getCountry} type='submit'>
        Click me
      </button>
    </div>
  );
};

export default CountryCard;
