import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import '../App.css';

const Navbar = ({ title }) => {
  console.log('Hello from Nav');
  return (
    <>
      <nav className="nav d-flex justify-content-between px-4">
        <div className="year-wrapper">2021</div>
        <div className="title-wrapper"><h1>{title}</h1></div>
        <div className="icons-wrapper">
          <div className="icon-one">
            <FaMicrophone color="white" />
          </div>
          <div className="icon-two">
            <MdSettings color="white" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
