import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1>Avatar, the Last Airbender</h1>
      <nav>
        <Link to="/"> Home </Link>
      </nav>  
    </>
  );
};

export default Header;
