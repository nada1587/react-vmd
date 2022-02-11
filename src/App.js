import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';
import Body from "./layouts/Body";
import Login from "./pages/Login";
import Main from './pages/Main';

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
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-text-size-adjust: none;
    font-size: 14px;
  }

  button {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .contents {
    height: 100%;
  }
`;

export default App;