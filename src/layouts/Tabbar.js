import React from 'react';
import {
  Link
} from "react-router-dom";

const Tabbar = () => {
  return (
    <div className="tab-bar-menu">
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/">공지</Link></li>
        <li><Link to="/">a/s</Link></li>
        <li><Link to="/">일정</Link></li>
        <li><Link to="/">매장/업체</Link></li>
      </ul>
    </div>
  );
};

export default Tabbar;