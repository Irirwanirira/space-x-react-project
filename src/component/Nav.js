import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src="/images/rocket.jpeg"
            alt="logo"
            className="logoIm"
          />
          <p>Space Travelers Hub</p>
        </div>
        <div
          className="menu-icon"
        >
          {showNavbar ? (
            <IoMdClose
              onClick={handleShowNavbar}
              className="icon"
            />
          ) : (
            <IoMenu
              onClick={handleShowNavbar}
              className="icon"
            />
          )}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/"> Rocket</NavLink>
            </li>
            <li>
              <NavLink to="/Missions"> Missions</NavLink>
            </li>
            <li>
              <NavLink to="/MyProfile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
