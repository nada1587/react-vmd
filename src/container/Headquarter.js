import React from 'react';
import { Link } from 'react-router-dom';

const Headquarter = () => {
  return (
    <>
      <div className="visual-wrap">
        <p>VMD</p>        
      </div>
      <div className="pd-box">
        <h2 className="title">진행중 A/S</h2>
        <ul>
          <li><Link to="/"></Link></li>
        </ul>
      </div>
    </>
  );
};

export default Headquarter;