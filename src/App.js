import React from 'react';
import './App.css';
import Header from './Header';
import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import Last from './Last';


function App() {
  return (
      <div className="app">
      <Routes>
      <Route  path="/" element={<><Header/><Home/><Last/></>}/>

      <Route exact path="/cservice" element={<><Header/><Last/></>}/>
      </Routes>
      </div>
    
  );
}

export default App;
