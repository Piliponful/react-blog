import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navbar}>
      <h1 className={styles.title}>Piece</h1>
      <nav>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}><Link to='/'>Posts</Link></li>
          <li className={styles.navbarItem}><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
