import { useState } from 'react';

import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Backdrop from '../../UIElements/Backdrop';
import NavLinks from './NavLinks';
import Hamburger from '../../UIElements/Hamburger';

import './css/Header.css';

const Header = ({ user }) => {
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
    <header className='main-header'>
      <div className='main-header__container'>
        {sidebarIsOpen && <Backdrop onClick={sidebarToggleHandler} />}
        <Sidebar show={sidebarIsOpen} onClick={sidebarToggleHandler}>
          <NavLinks user={user} />
        </Sidebar>
        <h1 className='main-header__title'>
          <Link to='/'>Miabelle.tv</Link>
        </h1>
        <nav className='main-nav'>
          <NavLinks user={user} />
        </nav>
        <Hamburger classes={classes} click={sidebarToggleHandler} />
      </div>
    </header>
  );
};

export default Header;
