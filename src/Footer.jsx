import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
    </footer>
  );
};

export default Footer;
