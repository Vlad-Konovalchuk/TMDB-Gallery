import React, { Component } from 'react'
import styles from './Footer.module.scss'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <h4 className={styles.title}>Vladyslav Konovalchuk <span role="img" aria-label="Logo">&#x26A1;</span></h4>
        <span>&copy; 2019</span>
        <a href="mailto:berlitio600@gmail.com" className={styles.link}>Contact Me on email</a>
      </footer>
    )
  }
}

export default Footer
