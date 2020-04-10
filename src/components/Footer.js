import React, { Component } from 'react';
import styles from './App.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <section className={styles.about}>
          &copy; Ben Beekman 2020
        </section>
      </footer>
    );
  }
}
