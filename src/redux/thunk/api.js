/* eslint-disable operator-linebreak */
import axios from 'axios';
import { fetchReport } from '../actions/action';

const URL =
  'https://api.covid19tracking.narrativa.com/api/countries?date_from=2021-03-20&date_to=2021-12-01';

const fetchCovid = () => (dispatch) => {
  axios.get(URL).then((res) => {
    const report = res.data;
    dispatch(fetchReport(report));
  });
};

export default fetchCovid;
