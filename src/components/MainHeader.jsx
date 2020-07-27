import React, { Component } from 'react'
import { Grid, TextField, Button, withStyles, Hidden } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import background from '../images/background.png'
import rickMorty from '../images/rick-morty.png'
import logo from '../images/logo.png'
import { Redirect, Link } from 'react-router-dom'

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
  front: {
    position: 'relative',
    height: '300px',
    maxHeight: '100vh'
  },
  background: {
    position: 'absolute',
    background: `url("${background}") center center/cover no-repeat`,
    width: '100%',
    height: '300px',
    maxHeight: '100vh',
    zIndex: '-2'
  },
  overlap: {
    position: 'absolute',
    background: 'rgba(0,0,0,.6) center center/cover no-repeat',
    width: '100%',
    height: '300px',
    maxHeight: '100vh',
    zIndex: '-1'
  },
  form: {
    marginTop: '2rem'
  },
  input: {
    marginRight: '.5rem',
    '& .MuiOutlinedInput-root': {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,.1)',
      '&:hover:not($disabled)': {
        backgroundColor: 'rgba(255,255,255,.2)',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#fff'
        }
      },
      '&.Mui-focused': {
        backgroundColor: 'rgba(255,255,255,.2)',
        '&:hover:not($disabled) .MuiOutlinedInput-notchedOutline': {
          borderColor: '#00afc8'
        }
      }
    },
    '& .MuiInputLabel-root': {
      color: '#fff'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.23)'
    }
  }
})

class MainHeader extends Component {
  constructor (props) {
    super(props)
    this.searchInput = React.createRef()
    this.state = {
      query: '',
      redirect: false
    }
  }

  // Function to send search form
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      query: this.searchInput.current.value,
      redirect: true
    })
  }

  render () {
    const { classes } = this.props

    if (this.state.redirect) {
      this.setState({
        redirect: false
      })
      return (
        <Redirect to={`/search-redirect/${this.state.query}`} />
      )
    }

    return (
      <header>
        <Grid container justify='center' alignItems='center' className={classes.front}>
          <div className={classes.background} />
          <div className={classes.overlap} />
          <Grid item md={6}>
            <Link to='/'>
              <img className={classes.img} src={logo} alt='background' />
            </Link>
            <form noValidate autoComplete='off' className={classes.form} onSubmit={this.handleSubmit}>
              <Grid container alignItems='center' justify='center'>
                <Grid item>
                  <TextField
                    id='search' label='Buscar' type='search'
                    variant='outlined' size='small' classes={{ root: classes.input }}
                    inputRef={this.searchInput}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    endIcon={<SearchIcon />}
                    type='submit'
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
