import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// Load styles and assets
import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

// Load components
import MainPage from './components/MainPage'
import SearchResults from './components/SearchResults'
import Page404 from './components/Page404'
import MainHeader from './components/MainHeader'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#12e0fe',
      main: '#00afc8',
      dark: '#00c2de',
      contrastText: '#fff'
    },
    secondary: {
      light: '#bee065',
      main: '#b4dc4d',
      dark: '#a9d734',
      contrastText: '#000'
    }
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(255,255,255,.4)',
        '&:hover:not($disabled)': {
          backgroundColor: 'rgba(255,255,255,.6)'
        }
      }
    }
  }
})

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <MainHeader />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/buscar' component={SearchResults} />
            <Route path='/404' component={Page404} />
            <Redirect from='*' to='/404' />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}
