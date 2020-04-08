import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';
import Resume from '../containers/Resume';


export default function App() {
  return (
    <main className={styles.App}>
      <Header />
      <Resume />
      <Footer />
    </main>
  );
}
