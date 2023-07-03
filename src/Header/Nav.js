import React, { Fragment, useState } from 'react';
import './Nav.css';
import Product from '../Product/Product';
import Feedback from '../Feedback/Feedback';
import AddPost from '../AddPost/AddPost';
import { Route, Routes, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
    <header className="header">
      <div className="logo">
      2klNa
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
        <li><Link to={'/'}>Home</Link></li>
          <li><a href="#AboutUs">About Us</a></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/Feedback'}>Feedback</Link></li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
   
  </Fragment>
  );
};

export default Header;