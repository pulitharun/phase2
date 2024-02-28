import React from 'react';
import { Link } from 'react-router-dom';
import './Homescreen.css'

const HomeScreen = () => {
  return (
    <div>
      <header className="header">
        <div className="header-links">
          <Link to={"/"}>RENTFURLAX</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </header>
      <h1>Welcome to RENTFURLAX</h1>
      <p>Find the best rental services for your needs.</p>
    </div>
  );
};

export default HomeScreen;
