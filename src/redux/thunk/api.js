/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import _ from 'lodash';
import { fetchContinent, fetchContinentFailure } from '../actions/action';

const baseURL = 'https://covid-api.mmediagroup.fr/v1/vaccines?continent=africa';

const fetchVacinated = () => (dispatch) => {
  axios
    .get(baseURL)
    .then((res) => {
      const reports = res.data;
      const continent = [];
      _.forEach(reports, (report) => continent.push(report));
      dispatch(fetchContinent(continent));
    })
    .catch((err) => {
      dispatch(fetchContinentFailure(err.message));
    });
};

export default fetchVacinated;
