import React from 'react';

import Title from '../../components/title/title';
import Login from '../../components/login/login';

import './header.css';

const Header = () => {
  return (
      <div className="header-container">
        <div className="title"><Title/></div>
        <div className="login"><Login/></div>
      </div>
  );
};

export default Header;