import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyles from './js/GlobalStyles';
import Body from "./layouts/Body";
import Login from "./pages/Login";
import Main from './pages/Main';
import Tabbar from './layouts/Tabbar';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Body>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </Body>
      <Tabbar />
    </>
  );
};

export default App;