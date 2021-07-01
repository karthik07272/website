import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Logo
            <i class='fab fa-typo3' />
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Online Courses
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                We're Hiring
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <div className="dropdown">
                  <button class="dropbtn">More</button>

                  <div className="dropdown-content">
                    <a href="#Blog">Blog</a>
                    <a href="#Certification">Certification</a>
                    <a href="#Alumni Team">Alumni Team</a>
                    <a href="#Forum">Forum</a>
                    <a href="#Hackathon">Hackathon</a>
                    <a href="#Membership Registration">Membkrship Registration</a>
                    <a href="#Campus Ambassador Program">Campus Ambassador Program</a>
                    <a href="#Mentorship">Mentorship</a>
                    <a href="#Social Meadia">Social Meadia</a>
                    <a href="#Testimonials">Testimonials</a>
                    <a href="#Complaints">Complaints</a>
                  </div>
                </div>
              </Link>

            </li>


          </ul>

        </div>
      </nav>
    </>
  );
}
export default Navbar;
