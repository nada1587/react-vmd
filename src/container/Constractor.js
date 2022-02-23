import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Constractor = () => {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <StyledButton variant="contained">Hello World</StyledButton>
      <StyledButton variant="outlined">Hello World</StyledButton>
      <StyledButton variant="text">Hello World</StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)`
  margin-top: 60px;
  background-color: lavender;
  :hover {
    background-color: lavenderblush;
  }
`;

export default Constractor;
