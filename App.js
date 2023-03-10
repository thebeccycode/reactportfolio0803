import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './reactportfolio/src/components/navigation/Home';
import About from './reactportfolio/src/components/navigation/About';
import Contact from './reactportfolio/src/components/navigation/Contact';
import Projects from './reactportfolio/src/components/navigation/Projects';
import Navbar from './reactportfolio/src/components/navigation/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/About" element={ <About />}></Route>
        <Route path="/Contact" element={ <Contact />}></Route>
        <Route path="/Projects" element={ <Projects />}></Route>
      </Routes>
      </BrowserRouter>
  );
}


export default App;
