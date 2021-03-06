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
import SearchResultsContainer from './containers/SearchResultsContainer/SearchResultsContainer'
import { NoMatch } from './components/NoMatch/NoMatch'

class App extends Component {
  handleSearch = (e) => {
    if (e.key === 'Enter') {
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
              <Route path={`${ROUTES.MOVIELIST}/:id`}
                     component={(props) => <MovieDetails {...props} key={props.match.params.id}/>}/>
              <Route path={`/search`}
                     component={props => <SearchResultsContainer {...props} key={props.location.search}/>}/>
              <Route path={ROUTES.HOME} exact component={Main}/>
              <Route component={NoMatch}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </ConnectedRouter>

    )
  }
}

export default App
