import { NavLink } from 'react-router-dom';

const NavLinks = props => {
  console.log('[NavLinks] render');
  return (
    <ul>
      <li>
        <NavLink to='/song/list'>Songlist</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
