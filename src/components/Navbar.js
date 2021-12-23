import React from 'react';
import PropTypes from 'prop-types';
import { FaMicrophone, FaAngleLeft } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ title }) => {
  const year = new Date();
  const currentYear = year.getUTCFullYear();
  if (title === 'Africa') {
    return (
      <>
        <nav className="nav d-flex justify-content-between px-2" data-testid="navbar">
          <div className="year-wrapper">
            {currentYear}
          </div>
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
  }
  return (
    <>
      <nav className="nav d-flex justify-content-between px-4">
        <div className="year-wrapper">
          <Link to="/"><FaAngleLeft color="white" size="25px" /></Link>
        </div>
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

Navbar.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Navbar;
