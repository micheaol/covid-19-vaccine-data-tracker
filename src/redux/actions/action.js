/* eslint-disable operator-linebreak */
export const FETCH_COVID_REPORT =
  'react-capstone-project/action/FETCH_COVID_REPORT';
export const FETCH_COVID_FAILURE =
  'react-capstone-project/action/FETCH_COVID_FAILURE';

export const fetchReport = (payload) => ({
  type: FETCH_COVID_REPORT,
  payload,
});

export const fetchReportFailure = (error) => ({
  type: FETCH_COVID_FAILURE,
  payload: error,
});
