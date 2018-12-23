import React, {Component} from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import * as ROUTES from "./routes";
import * as URL from "./urlPath";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import {ConnectedRouter} from 'connected-react-router'

class App extends Component {

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div className={styles.app}>
                    <Navbar/>
                    <main className={styles.layout}>
                        <Switch>
                            <Route path={ROUTES.COMINGSOON} component={(props) => (
                                <MovieListContainer {...props} category={URL.COMING_FILMS}/>)}/>
                            <Route path={ROUTES.NOW_PLAYING_FILMS} component={(props) => (
                                <MovieListContainer {...props} category={URL.NOW_PLAYING_FILMS}/>)}/>
                            <Route path={ROUTES.TOP_RATED} component={(props) => (
                                <MovieListContainer {...props} category={URL.TOP_RATED_FILMS}/>)}/>
                            <Route path={`${ROUTES.MOVIELIST}/:id`} component={MovieDetails}/>
                            <Route path={ROUTES.HOME} exact component={Main}/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </ConnectedRouter>

        );
    }
}

export default App;