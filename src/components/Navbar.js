import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

const Navbar = ({ title }) => {
  console.log('Hello from Nav');
  return (
    <>
      <nav className="nav d-flex justify-content-between">
        <div className="year-wrapper">2021</div>
        <div className="title-wrapper"><h1>{title}</h1></div>
        <div className="icons-wrapper">
          <FaMicrophone />
          <MdSettings />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
