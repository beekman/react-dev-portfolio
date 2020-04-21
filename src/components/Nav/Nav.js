import React from 'react';
import styles from './Nav';
import { Link } from 'react-scroll';
export default function Nav() {
  return (
    <header>
      <h1 className={styles.Logo}>
        <strong>Ben</strong>
        <b>Beekman</b>
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
              activeClass={styles.active}>About
            </Link>
          </li>
          <li>
            <Link
              to='Skills'
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className={styles.Link}
              activeClass={styles.Active}>
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
              className={styles.Link}
              activeClass={styles.Active}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='Contact'
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className={styles.Link}
              activeClass={styles.Active}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
