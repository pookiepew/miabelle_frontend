import { NavLink } from 'react-router-dom';

import './css/NavLinks.css';

const NavLinks = props => {
  console.log('[NavLinks] render');
  return (
    <ul className='navlinks'>
      <li className='navlinks__link'>
        <NavLink to='/song/list'>Songlist</NavLink>
      </li>
      {/* <li className='navlinks__link'>
        <NavLink to='/login'>Login</NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
