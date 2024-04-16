import React, { useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import About from './components/About/About';
import Servicos from './components/Servicos/Servicos';
import Contacts from './components/Contacts/Contacts';

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Servicos />
      <Contacts />
    </div>
  );
};

export default App
