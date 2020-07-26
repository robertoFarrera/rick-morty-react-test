import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// Load styles and assets
import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider, Switch as SwitchButton, FormControlLabel, Grid } from '@material-ui/core'

// Load components
import MainPage from './components/MainPage'
import SearchResults from './components/SearchResults'
import Page404 from './components/Page404'
import MainHeader from './components/MainHeader'

export default function App () {
  const [dark, setDark] = useState(false)

  const setTheme = (event) => {
    setDark(!dark)
  }

  const theme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
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
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <MainHeader />
          <Grid container justify='flex-end'>
            <FormControlLabel
              control={<SwitchButton checked={dark} onChange={setTheme} name='darkMode' />}
              label='Dark Mode'
            />
          </Grid>

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
