import React from 'react';
import { NavLink } from 'react-router-dom';
// import css from '../Styles.module.css';

const HomeView = () => (
  <div>
    <h1>Welcome to the phonebook </h1>
    <p>please</p>
    <div>
      <NavLink to="/login">Log in</NavLink>
      <p>or</p>
      <NavLink to="/register">Register</NavLink>
    </div>
  </div>
);

export default HomeView;
