import React, { Component } from 'react'
import { Switch, FormControlLabel, Grid } from '@material-ui/core'

class ThemeSelector extends Component {
  render () {
    const { dark, setTheme } = this.props
    return (
      <Grid container justify='flex-end'>
        <FormControlLabel
          control={<Switch name='darkMode' checked={dark} onChange={setTheme} />}
          label='Dark Mode'
        />
      </Grid>
    )
  }
}

export default ThemeSelector
