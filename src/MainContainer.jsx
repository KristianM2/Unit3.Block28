import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blue from './Blue';
import Red from './Red';

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
