import React from "react";
import myLogo from "../MyImage.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' href='#'>
          <img className='logo' src={myLogo} alt='My Logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          {/* <span className='navbar-toggler-icon'></span> */}
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link
                offset={-110}
                smooth={true}
                to='home'
                className='nav-link'
                href='#'
                spy={true}
                activeClass='active'
              >
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                offset={-50}
                smooth={true}
                to='about'
                className='nav-link'
                href='#'
                spy={true}
                activeClass='active'
              >
                About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                offset={-50}
                smooth={true}
                to='services'
                className='nav-link'
                href='#'
                spy={true}
                activeClass='active'
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                offset={-50}
                smooth={true}
                to='experience'
                className='nav-link'
                href='#'
                spy={true}
                activeClass='active'
              >
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                offset={-50}
                smooth={true}
                to='portfolio'
                className='nav-link'
                href='#'
                spy={true}
                activeClass='active'
              >
                Portfolio
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                offset={-50}
                smooth={true}
                to='contacts'
                className='nav-link'
                href='#'
                spy={true}
                activeClass='active'
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
