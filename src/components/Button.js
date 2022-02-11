import React from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => {
  return (
    <ButtonSet type={props.type}>
      {props.children}
    </ButtonSet>
  );
};

const ButtonSet = styled.button`
  border: 0;
  padding: 0;
  vertical-align: middle;
  ${props => {
    switch(props.type) {
      case "icon" :
        return css`
          width: 20px;
          height: 20px;
          background-color: #ccc;
          > span {
            width: 0;
            height: 0;
            font-size: 0;
            color: transparent;
          }
        `;
      case "text" :
        return css`
          color: #0365FF;
          font-size: 16px;
        `;
      case "back" :
        return css`
          position: relative;
          padding-left: 30px;
          background: none;
          font-size: 16px;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            display: inline-block;
            width: 9px;
            height: 15px;
            margin-top: -7px;
            background: url('https://dummyimage.com/9x15/ccc/fff.jpg') no-repeat 0 0;
          }
        `;
      default :
        return css`
          background-color: pink;
        `;
    }
  }}

  & + button {
    margin-left: 18px;
  }
`;

export default Button;