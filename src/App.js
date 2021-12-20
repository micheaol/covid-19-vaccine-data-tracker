import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import fetchCovid from './redux/thunk/api';

function App() {
  const dispatch = useDispatch();
  const report = useSelector((state) => state.report);
  console.log('I am from here', report);
  useEffect(() => {
    dispatch(fetchCovid());
  }, []);
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
