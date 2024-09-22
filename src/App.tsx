import { Provider } from 'react-redux';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import DonationForm from './components/DonationForm';
import store from '../src/redux/store';
import DonationDetail from './components/DonationDetail';
import DonationDetailList from './components/DonationDetailList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditCondition from './components/EditCondition';


function App() {
  return (
    <>
      <Provider store={store}>

        <EditCondition />


      </Provider >
    </>

  );
}

export default App;
