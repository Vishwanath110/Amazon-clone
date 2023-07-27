import React from 'react';
import './App.css';
import Header from './Header';
import {  Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
      <div className="app">
      <Routes>
      <Route  path="/" element={<><Header/><Home/></>}/>

      <Route exact path="/cservice" element={<><Header/></>}/>
      </Routes>
      </div>
    
  );
}

export default App;
