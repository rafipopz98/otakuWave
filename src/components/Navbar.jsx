import React from "react";
import { MdSearch } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logonavbar">
        <Link to={"/"}>
          <h3>otakuWave</h3>
        </Link>
      </div>
      <div className="leftnavbar">
      <Link to={'/'}>
        <h1 className="homenav">HOME</h1>
      </Link>
      <Link to={'/top100'}>
        <h1>TOP 100</h1>
      </Link>
      </div>
      <div className="middlenavbar">
        <input className="navbarinput" type="text" placeholder="search for your favorite anime"/>
        <MdSearch className="searchicon"/>
      </div>
      <div className="rightnavbar">
      <Link to={'/watchlist'}>
        <h1 className="watchlistnav">Watchlist</h1>
      </Link>
      <Link to={'/dashboard'}>
        <h1 className="accountnav">Account</h1>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
