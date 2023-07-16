import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Styles.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.nav__link)}
        to="/register"
      >
        <span className={css.auth__reg}>REGISTRATION</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.nav__link)}
        to="/login"
      >
        <span className={css.auth__login}>LOG IN</span>
      </NavLink>
    </div>
  );
}
