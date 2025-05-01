import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><NavLink className='work-sans-font' to='/'>Home</NavLink></li>
      <li><NavLink className='work-sans-font' to={'/listedBooks'}>Listed Books</NavLink></li>
      <li><NavLink className='work-sans-font' to={'/pageToRead'}>Page to Rad</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm min-h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="work-sans-font menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl work-sens-font">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn work-sens-font bg-[#23BE0A]">Sign In</a>
        <a className="btn work-sens-font bg-[#59C6D2] ml-4">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
