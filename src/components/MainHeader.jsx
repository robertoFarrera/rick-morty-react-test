import React, { Component } from 'react'
import { Grid, TextField, Button, withStyles, Hidden } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import background from '../images/background.png'
import rickMorty from '../images/rick-morty.png'
import logo from '../images/logo.png'

const styles = theme => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  },
  rick: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    height: '300px',
    maxHeight: '100vh'
  },
  background: {
    position: 'fixed',
    background: `url("${background}") center center/cover no-repeat`,
    width: '100%',
    height: '300px',
    maxHeight: '100vh',
    zIndex: '-2'
  },
  overlap: {
    position: 'fixed',
    background: 'rgba(0,0,0,.6) center center/cover no-repeat',
    width: '100%',
    height: '300px',
    maxHeight: '100vh',
    zIndex: '-1'
  },
  form: {
    marginTop: '2rem'
  },
  front: {
    height: '300px',
    maxHeight: '100vh'
  }
})

class MainHeader extends Component {
  render () {
    const { classes } = this.props
    return (
      <header>
        <div className={classes.background} />
        <div className={classes.overlap} />
        <Grid container justify='center' alignItems='center' className={classes.front}>
          <Grid item md={6}>
            <img className={classes.img} src={logo} alt='background' />
            <form noValidate autoComplete='off' className={classes.form}>
              <Grid container alignItems='center' justify='center'>
                <Grid item>
                  <TextField
                    id='search' label='Buscar' type='search'
                    variant='outlined' size='small'
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    endIcon={<SearchIcon />}
                  >
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <img className={classes.rick} src={rickMorty} alt='Rick and  Morty' />
            </Grid>
          </Hidden>
        </Grid>
      </header>
    )
  }
}

export default withStyles(styles)(MainHeader)
