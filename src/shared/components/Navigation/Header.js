import { useState } from 'react';

import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Backdrop from '../../UIElements/Backdrop';
import NavLinks from './NavLinks';
import Hamburger from '../../UIElements/Hamburger';

const Header = props => {
  console.log('[Header] render');

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [classes, setClasses] = useState('hamburger hamburger--spin');

  const sidebarToggleHandler = () => {
    setSidebarIsOpen(!sidebarIsOpen);
    if (!sidebarIsOpen) {
      setClasses('hamburger hamburger--spin is-active');
    } else {
      setClasses('hamburger hamburger--spin');
    }
  };

  return (
    <header>
      {sidebarIsOpen && <Backdrop onClick={sidebarToggleHandler} />}
      <Sidebar show={sidebarIsOpen} onClick={sidebarToggleHandler}>
        <h1>
          <Link to='/'>Miabelle.tv</Link>
        </h1>
        <NavLinks />
      </Sidebar>
      <h1>
        <Link to='/'>Miabelle.tv</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
      <Hamburger classes={classes} click={sidebarToggleHandler} />
    </header>
  );
};

export default Header;
