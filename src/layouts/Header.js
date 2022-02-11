import React from 'react';
import {
  Link
} from "react-router-dom";
import Button from '../components/Button';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <HeaderSet type={props.type}>
      <div className="left-area">
        <h1 className="logo"><Link to="/"><img src="https://dummyimage.com/60x16/ccc/fff.jpg" alt="MLB" width="60" height="16" /></Link></h1>
        <Button type="back">
          <span>프로필</span>
        </Button>
      </div>
      <div className="right-area">
        <Button type="icon" className="btn-alarm">
          <span>버튼1</span>
        </Button>
        <Button type="icon" className="btn-my">
          <span>버튼2</span>
        </Button>
        <Button type="text">텍스트버튼</Button>
      </div>
    </HeaderSet>
  );
};

const HeaderSet = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 15px;
  background : ${props => props.type === 'main' ? 'transparent' : '#fff'};
  .left-area {
    .logo {
      > a {
        display: inline-block;
      }
    }
  }
  .right-area {

  }
`;

export default Header;