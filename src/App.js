import React from 'react';

import Page1 from './Components/Page1/Page1';
import Part1 from './Components/Part1/Part1';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

import './App.css';

function App() {
  const navaboutme=React.useRef(null);
  const contme=React.useRef(null);
  const navserv=React.useRef(null);
  const testimo=React.useRef(null);
  const divyapro=React.useRef(null);
  return (
    <div className="App">
      <Page1 
      testimo={testimo} 
      navaboutme={navaboutme} 
      contme={contme}
      navserv={navserv}
      divyapro={divyapro}/>
      <Part1 divyapro={divyapro}/>
      <About navaboutme={navaboutme}/>
      <Services navserv={navserv}/>
      <Projects/>
      <Portfolio testimo={testimo}/>
      <Contact contme={contme}/>
    </div>
  );
}

export default App;
