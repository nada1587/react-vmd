import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
/* reset */
${reset}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -webkit-text-size-adjust: none;
  color: #000;
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

img {
  vertical-align: middle;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* wrapper */
.vmd-wrapper {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

/* container, contents */
.vmd-container {
  display: flex;
  flex-direction: column;
  height: 1500px;
}

.vmd-contents {
  position: relative;
}

/* box */
.pd-box {
  padding: 20px 15px;
}

.bg-box {
  padding: 15px;
  background-color: #F7F6F8;
}

/* tabbar */
.tab-bar-menu {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  -webkit-box-shadow: 0 0 5px #E7E9EF;
  box-shadow: 0 0 5px #E7E9EF;
  z-index: 170;
  ul {
    display: flex;
    width: 100%;
    padding: 8px 15px 3px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    li {
      display: inline-block;
      text-align: center;
      > a {
        display: inline-block;
        min-width: 30px;
        padding-top: 30px;
        border: 1px solid #000;
      }
    }
  }
}

/* pages */
/* main - headquarter */
.visual-wrap {
  height: 250px;
  padding: 125px 15px 0;
  background-color: lavender;
}

.title {
  padding: 35px 0 20px;
  font-size: 18px;
  font-weight: 600;
}


`;

export default GlobalStyles;