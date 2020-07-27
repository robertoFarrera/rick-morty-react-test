import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Load components
import MainHeader from './components/MainHeader'
import MainPage from './components/MainPage'
import SearchResults from './components/SearchResults'
import Page404 from './components/Page404'
import ThemeSelector from './components/ThemeSelector'

class Router extends Component {
  render () {
    const { dark, setTheme } = this.props
    return (
      <BrowserRouter>
        <MainHeader />
        {/* Switch to change theme mode */}
        <ThemeSelector setTheme={setTheme} dark={dark} />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/buscar' component={SearchResults} />
          {/* Function to redirect search data form to SearchResults component
            This help to be able for searching even into SearchResults component */}
          <Route
            exact path='/search-redirect/:query' render={(props) => {
              var query = props.match.params.query
              return (
                <Redirect to={`/buscar?texto=${query}`} />
              )
            }}
          />
          {/* Routes Error 404 to show when url does not exist */}
          <Route exact path='/404' component={Page404} />
          <Redirect from='*' to='/404' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
