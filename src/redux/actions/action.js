/* eslint-disable operator-linebreak */
export const FETCH_CONTINENT = 'react-capstone-project/action/FETCH_CONTINENT';
export const FETCH_CONTINENT_FAILURE =
  'react-capstone-project/action/FETCH_CONTINENT_FAILURE';

export const fetchContinent = (payload) => ({
  type: FETCH_CONTINENT,
  payload,
});

export const fetchContinentFailure = (error) => ({
  type: FETCH_CONTINENT_FAILURE,
  payload: error,
});
