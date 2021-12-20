/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './reducers/covid';

const reducer = combineReducers({
  report: covidReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
