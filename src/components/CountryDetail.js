import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/actions/action';

const CountryDetail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.vaccine);
  console.log('from detail page', country);

  useEffect(() => {
    if (country.length === 0) dispatch(fetchCountryDetails());
  }, []);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default CountryDetail;
