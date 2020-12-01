import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';

const Header = props => {
  console.log('[Header] render');
  return (
    <header>
      <h1>
        <Link to='/'>Miabelle.tv</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
