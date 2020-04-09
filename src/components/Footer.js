import React, { Component } from 'react';
import styles from './App.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.Footer }>
        <section className={ styles.about }>
          Developed by Ben Beekman
        </section>
      </footer>
    );
  }
}
