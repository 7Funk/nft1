import React from 'react'
import styles from './/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
        <img src="/images/headerLogo.png" alt="logo" />
        <a className={styles.link}>Story</a>
        <a className={styles.link}>Team</a>
        <a className={styles.link}>Auction</a>
        <a className={styles.link}>Contact </a>
        <a className={styles.link}> FAQ</a>
        <a className={styles.link}>Whitepaper</a>
        <a className={styles.link}>CONNECT WALLET </a>
    </header>
  )
}
