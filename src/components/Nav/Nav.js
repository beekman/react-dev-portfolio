import React from 'react';
import styles from '../App';
import { Link } from 'react-scroll';
export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <ul>
        <Link
          to='About'
          spy={true}
          smooth={true}
          duration={600}
          className={styles.Link}
          activeClass={styles.Active}>
          <li>About</li>
        </Link>
        <Link
          to='Skills'
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={600}
          className={styles.Link}
          activeClass={styles.Active}>
          <li>Skills</li>
        </Link>
        <Link
          to='Projects'
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={600}
          className={styles.Link}
          activeClass={styles.Active}>
          <li>Projects</li>
        </Link>
        <Link
          to='Contact'
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={600}
          className={styles.Link}
          activeClass={styles.Active}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
