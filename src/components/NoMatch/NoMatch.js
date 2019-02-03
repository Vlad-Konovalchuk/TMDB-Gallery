import React from 'react';
import styles from './NoMatch.module.css'
import logo from '../../../src/assets/404.jpg'
export const NoMatch = () =>(
  <div className={styles.nomatch}>
    <h1 className={styles.title}>Do not give up, you will definitely find what you are looking for ; )</h1>
    <img src={logo} alt="404 Logo" className={styles.logo}/>
  </div>
)
