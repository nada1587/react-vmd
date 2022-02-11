import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Headquarter from "../container/Headquarter";
import Store from "../container/Store";
import Constractor from "../container/Constractor";
import Error from "./Error";


const Main = () => {
  return (
    <div>
      메인페이지
      <Routes>
        <Route path="/headquarter" element={<Headquarter />} />
        <Route path="/store" element={<Store />} />
        <Route path="/constractor" element={<Constractor />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Main;