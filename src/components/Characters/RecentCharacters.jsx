import React, { Component } from 'react'
import { Container, Grid, withStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import CharacterCard from './CharacterCard'
import axios from 'axios'

const styles = theme => ({
  pagination: {
    margin: '4rem 0'
  }
})

class recentCharacters extends Component {
  state = {
    characters: [],
    info: {},
    page: 1
  }

  componentDidMount () {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        this.setState({ characters: res.data.results })
        this.setState({ info: res.data.info })
      })
  }

  handleChange = (event, value) => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${value}`)
      .then(res => {
        this.setState({ characters: res.data.results })
        this.setState({ info: res.data.info })
        this.setState({ page: value })
      })
  }

  render () {
    const { classes } = this.props
    return (
      <Container>
        <h1>Personajes Recientes</h1>
        <Grid container spacing={4} justify='center'>
          {this.state.characters.map(character => {
            return (
              <Grid item md={4} lg={3} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            )
          })}
        </Grid>
        <Grid container justify='center' className={classes.pagination}>
          <Grid item>
            <Pagination count={this.state.info.pages} page={this.state.page} color='primary' onChange={this.handleChange} />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(recentCharacters)
