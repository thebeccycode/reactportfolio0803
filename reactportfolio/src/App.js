import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/navigation/Home';
import About from './components/navigation/About';
import Contact from './components/navigation/Contact';
import Projects from './components/navigation/Projects';
import Navbar from './components/navigation/Navbar';
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
