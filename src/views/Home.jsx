import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Styles.module.css';

const HomeView = () => (
  <div className={css.home__container}>
    <h1 className={css.home__title}>WELCOME TO THE PHONEBOOK </h1>
    <p className={css.please}>PLEASE</p>
    <div className={css.please__container}>
      <NavLink
        className={({ active }) => (active ? css.active : css.home__linc)}
        to="/login"
      >
       <span className={css.welcome__to}>LOG IN</span> 
      </NavLink>
      <p className={css.or}>OR</p>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.home__linc)}
        to="/register"
      >
       <span className={css.welcome__to}>REGISTER</span> 
      </NavLink>
    </div>
  </div>
);

export default HomeView;