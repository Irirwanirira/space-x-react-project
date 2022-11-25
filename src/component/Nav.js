import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav className="nav_bar">
      <div className="logo_head">
        <img src="/images/rocket.jpeg" alt="logo" className="logo" />
        <p>Space Travelers Hub</p>
      </div>
      <div className="navigation">
        <NavLink className="rocket" to="/">
          Rocket
        </NavLink>
        <NavLink className="mission" to="/Missions">
          Missions
        </NavLink>
        {' '}
        |
        <NavLink className="profile" to="/MyProfile">
          My Profile
        </NavLink>
      </div>
    </nav>
  </header>
);
export default Nav;
