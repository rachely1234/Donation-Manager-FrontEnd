import { Provider } from 'react-redux';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import DonationForm from './components/DonationForm';
import store from '../src/redux/store';


function App() {
  return (
    <>
    <Provider store={store}>
    <DonationForm/>
    </Provider>
    </>
   
  );
}

export default App;
