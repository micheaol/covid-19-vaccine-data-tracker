/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-quotes */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import '../App.css';

const CountryCard = ({ vaccine, getCountry }) => {
  return (
    <>
      <div className='card inner-wrapper' data-id={vaccine.All.country}>
        <Link to={`/detail/${vaccine.All.country}`} onClick={getCountry} type='submit'>
          <BsArrowRightCircleFill />
        </Link>
        <h1>{vaccine.All.country}</h1>
        <h1>{vaccine.All.people_vaccinated.toLocaleString()}</h1>
      </div>
    </>
  );
};

export default CountryCard;
