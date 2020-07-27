import React, { useState } from 'react'

// Load styles and assets
import 'fontsource-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Router from './router'
import 'moment/locale/es'

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
      {/* React Router to handle all views */}
      <Router setTheme={setTheme} dark={dark} />
    </ThemeProvider>
  )
}
