/* eslint-disable no-case-declarations */
import _ from 'lodash';
import {
  FETCH_CONTINENT,
  FETCH_CONTINENT_FAILURE,
  FETCH_COUNTRY,
} from '../actions/action';

const initialState = [];

const vacineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CONTINENT:
      return payload;
    case FETCH_CONTINENT_FAILURE:
      return state;
    case FETCH_COUNTRY:
      const newState = _.filter(
        state, (vaccine) => vaccine.All.country === payload,
      );
      return newState;
    default:
      return state;
  }
};

export default vacineReducer;
