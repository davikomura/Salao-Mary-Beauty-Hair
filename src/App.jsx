import React from 'react'
import Home from './components/Home/Home';
import About from './components/About/About';
import Servicos from './components/Servicos/Servicos';
import Contacts from './components/Common/Footer/Contacts';
import Navigation from './components/Common/Header/Navigation';
import Page from './Pages/Page';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navigation />
      {/* <Home /> */}
      <Outlet />
      {/* <About /> */}
      {/* <Servicos /> */}
      {/* <Page /> */}
      <Contacts />
    </>
  );
};

export default App
