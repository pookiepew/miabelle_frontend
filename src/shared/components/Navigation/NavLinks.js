import { NavLink } from 'react-router-dom';

import './css/NavLinks.css';

const NavLinks = ({ user }) => {
  return (
    <ul className='navlinks'>
      <li className='navlinks__link'>
        <NavLink to='/song/list'>Songlist</NavLink>
      </li>
      {!user.isAuthenticated && (
        <li className='navlinks__link'>
          <NavLink to='/login'>Login</NavLink>
        </li>
      )}
      {user.isAuthenticated && (
        <li className='navlinks__link'>
          <NavLink to='/account'>
            <img
              className='navlinks__account-image'
              src={user.profile_image_url}
              alt='ProfileImage'
            />
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
