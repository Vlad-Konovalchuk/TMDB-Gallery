import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import * as ROUTES from "../../routes";
import logo from "../../icon.svg";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt="LogoType" className={styles.header__image}/>
                </Link>
            </div>
            <nav className={styles.nav__list}>
                <Link to={ROUTES.HOME}>Home Page</Link>
                <Link to={ROUTES.COMINGSOON}>Coming soon</Link>
                <Link to={ROUTES.NOW_PLAYING_FILMS}>Now in cinema</Link>
                <Link to={ROUTES.TOP_RATED}>Top Rated</Link>
            </nav>
        </header>
    );
};

export default Navbar;
