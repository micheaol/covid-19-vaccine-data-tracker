/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import vacineReducer from './reducers/covid';

const reducer = combineReducers({
  report: vacineReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
