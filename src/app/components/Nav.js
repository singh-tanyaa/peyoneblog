import React from 'react';
import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Nav = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
        <Link href='/'>
           Home
        </Link>

        </li>
        <li className={styles.navbarItem}>
        <Link href='/about'>
          About
        </Link>

        </li>
        <li className={styles.navbarItem}>
        <Link href='/blog'>
          Blog
        </Link>

        </li>
        <li className={styles.navbarItem}>
        <Link href='/contact'>
          Contact
        </Link>

        </li>
        <li className={styles.navbarItem}>
        <Link href='/register'>
          Signup
        </Link>
      </li>
        <li className={styles.navbarItem}>
        <Link href='/login'>
          Login
        </Link>

        </li>

        </ul>
      </div>
    </div>
  )
}

export default Nav