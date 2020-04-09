import React, { Component } from 'react';
import styles from './App.css';

const Header = ({ header }) => {
  return (
    <header className={ styles.Header }>
      <h1>Ben Beekman</h1>
    </header>
  );
};

export default Header;
