import { FETCH_CONTINENT, FETCH_CONTINENT_FAILURE } from '../actions/action';

const initialState = [];

const vacineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CONTINENT:
      return payload;
    case FETCH_CONTINENT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default vacineReducer;
