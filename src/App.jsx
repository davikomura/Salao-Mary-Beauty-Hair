import React, { useState } from 'react'
import Contacts from './components/Common/Footer/Contacts';
import Navigation from './components/Common/Header/Navigation';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Navigation />
      <Outlet />
      <Contacts />
    </>
  );
};

export default App
