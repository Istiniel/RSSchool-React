import React from 'react';
import MainPage from './Pages/MainPage';
import Header from './components/Header';
import About from './Pages/About';
import NoMatches from './Pages/NoMatches/';

import './styles/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="404" element={<NoMatches />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
