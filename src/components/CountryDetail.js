import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/actions/action';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.vaccine[0].All);

  useEffect(() => {
    if (country.length === 0) dispatch(fetchCountryDetails());
  }, []);
  return (
    <div>
      <h1>{`People vaccinated: ${country.people_vaccinated}`}</h1>
    </div>
  );
};

export default CountryDetail;
