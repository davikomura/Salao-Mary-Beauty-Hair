import React, { useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import About from './components/About/About';
import Servicos from './components/Servicos/Servicos';

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Servicos />
    </div>
  );
};

export default App
