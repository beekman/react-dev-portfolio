import React from 'react';
import styles from './Nav.css';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Logo}>
        <strong>Ben</strong>
        <b>Beekman</b><span className={styles.dev}>.dev</span>
      </h1>

      <nav className={styles.Nav}>
        <ul>
          <li>
            <Link
              to='About'
              spy={true}
              smooth={true}
              duration={600}
              className={styles.link}
              activeClass={styles.active}>
              About
            </Link>
          </li>
          <li>
            <Link
              to='Skills'
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className={styles.link}
              activeClass={styles.active}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='Projects'
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className={styles.link}
              activeClass={styles.active}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='Contact'
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={400}
              className={styles.link}
              activeClass={styles.active}>
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
