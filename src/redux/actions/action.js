/* eslint-disable operator-linebreak */
export const FETCH_CONTINENT = 'react-capstone-project/action/FETCH_CONTINENT';
export const FETCH_CONTINENT_FAILURE =
  'react-capstone-project/action/FETCH_CONTINENT_FAILURE';

export const FETCH_COUNTRY = 'react-capstone-project/action/FETCH_COUNTRY';
export const FETCH_COUNTRY_FAILURE =
  'react-capstone-project/action/FETCH_COUNTRY_FAILURE';

export const fetchContinent = (payload) => ({
  type: FETCH_CONTINENT,
  payload,
});

export const fetchContinentFailure = (error) => ({
  type: FETCH_CONTINENT_FAILURE,
  payload: error,
});

export const fetchCountryDetails = (payload) => ({
  type: FETCH_COUNTRY,
  payload,
});

export const fetchCountryFailure = (error) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});
