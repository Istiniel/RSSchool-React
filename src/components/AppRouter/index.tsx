import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import MainPage from '../../Pages/MainPage';
import About from '../../Pages/About';
import Registration from '../../Pages/Registration';
import NoMatches from '../../Pages/NoMatches';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<About />} />
        <Route path="sign" element={<Registration />} />
        <Route path="404" element={<NoMatches />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
