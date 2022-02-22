import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Headquarter from '../container/Headquarter';
import Store from '../container/Store';
import Constractor from '../container/Constractor';
import Error from './Error';

const Main = () => {
  return (
    <>
      <Header type="main" />
      <div className="vmd-contents">
        <Routes>
          <Route path="/" element={<Headquarter />} />
          <Route path="/store" element={<Store />} />
          <Route path="/constractor" element={<Constractor />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Main;
