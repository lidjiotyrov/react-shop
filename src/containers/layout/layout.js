import React from 'react';

import Nav from '../../components/nav/nav';
import Content from '../../components/content/content'

import './layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="nav"><Nav /></div>
      <div className="content"><Content/></div>
    </div>
  );
};

export default Layout;