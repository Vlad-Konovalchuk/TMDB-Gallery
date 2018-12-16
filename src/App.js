import React, {Component} from 'react';
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import MoviesComing from "./components/MoviesComing/MoviesComing";
import Main from "./components/Main/Main";
import * as ROUTES from './routes';
import MovieDetails from "./components/MovieDetails/MovieDetails";

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Navbar/>
                <main className={styles.layout}>
                    <Switch>
                        <Route path={ROUTES.COMINGSOON} component={MoviesComing}/>
                        <Route path={`${ROUTES.MOVIELIST}/:id`} component={MovieDetails}/>
                        <Route path={ROUTES.HOME} exact component={Main}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
