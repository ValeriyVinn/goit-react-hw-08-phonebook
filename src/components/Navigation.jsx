import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import css from '../Styles.module.css';


const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav >
      {isLoggedIn ? (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.nav__link)}
          to="/contacts"
        >
          CONTACTS
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.nav__link)}
          to="/"
        > HOME
          
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;