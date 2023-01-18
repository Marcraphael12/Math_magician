import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components list
import Calculator from './components/Calculator';
import Quote from './components/Pages/Quotes';
import Header from './components/Pages/Header';
import Home from './components/Pages/Home';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
