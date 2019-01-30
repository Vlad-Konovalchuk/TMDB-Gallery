import React, { Component } from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main/Main'
import * as ROUTES from './routes'
import * as URL from './urlPath'
import MovieDetails from './containers/MovieDetailsContainer/MovieDetailsContainer'
import MovieListContainer from './containers/MovieListContainer/MovieListContainer'
import { ConnectedRouter } from 'connected-react-router'
import SearchResult from './containers/SearchResult/SearchResult'

class App extends Component {
  handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate')
      this.props.history.push({
        pathname: '/search',
        search: `?query=${e.target.value}`,
      })
    }
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className={styles.app}>
          <Navbar searchHandler={this.handleSearch}/>
          <main className={styles.layout}>
            <Switch>
              <Route path={ROUTES.COMINGSOON} component={(props) => (
                <MovieListContainer {...props} category={URL.COMING_FILMS}/>)}/>
              <Route path={ROUTES.NOW_PLAYING_FILMS} component={(props) => (
                <MovieListContainer {...props} category={URL.NOW_PLAYING_FILMS}/>)}/>
              <Route path={ROUTES.TOP_RATED} component={(props) => (
                <MovieListContainer {...props} category={URL.TOP_RATED_FILMS}/>)}/>
              <Route path={`${ROUTES.MOVIELIST}/:id`} component={MovieDetails}/>
              <Route path={`/search`} component={SearchResult}/>
              <Route path={ROUTES.HOME} exact component={Main}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </ConnectedRouter>

    )
  }
}

export default App
