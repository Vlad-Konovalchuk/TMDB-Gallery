import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';
import * as ROUTES from '../../routes';
import logo from '../../icon.svg';

class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    <img src={logo} alt="LogoType" className={styles.header__image}/>
                </div>
                <nav className={styles.nav__list}>
                    <Link to={ROUTES.HOME}>Home Page</Link>
                    <Link to={ROUTES.COMINGSOON}>Coming soon</Link>
                    <Link to={ROUTES.MOVIELIST}>Movies</Link>
                </nav>
            </header>
        );
    }
}

export default Navbar;