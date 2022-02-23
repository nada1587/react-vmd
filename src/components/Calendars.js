import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

const Calendars = () => {
  return (
    <>
      <StyledCalendar />
    </>
  );
};

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  margin-top: 56px;
  font-size: 18px;
  text-decoration: none;
  .react-calendar__month-view__weekdays__weekday {
    > abbr {
      text-decoration: none;
      font-size: 20px;
    }
  }
`;

export default Calendars;
