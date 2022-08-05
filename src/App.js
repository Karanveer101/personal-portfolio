import Home from './components/Home';
import React from 'react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
