import { FETCH_COVID_REPORT } from '../actions/action';

const initialState = [];

const covidReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COVID_REPORT:
      return payload;
    default:
      return state;
  }
};

export default covidReducer;
