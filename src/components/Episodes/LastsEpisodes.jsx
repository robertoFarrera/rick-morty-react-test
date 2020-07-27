import React, { Component } from 'react'
import { Container, Grid, withStyles, Typography } from '@material-ui/core'
import EpisodeCard from './EpisodeCard'
import axios from 'axios'
import EpisodeInformation from './EpisodeInformation'

const styles = theme => ({
  container: {
    marginTop: '3rem'
  }
})

class LastsEpisodes extends Component {
  state = {
    episodes: [],
    episode: {},
    isOpen: false
  }

  componentDidMount () {
    // Create Array to get 4 random characters from RMAPI
    const randomArray = Array.from({ length: 4 }, () => Math.floor(Math.random() * 36))

    // Send get request to RMAPI
    axios.get('https://rickandmortyapi.com/api/episode/' + randomArray)
      .then(res => {
        this.setState({ episodes: res.data })
      })
  }

  handleOpenModal = (episode) => {
    this.setState({
      isOpen: true,
      episode
    })
  }

  handleCloseModal = () => {
    console.log('Cerrado')
    this.setState({
      isOpen: false,
      episode: {}
    })
  }

  render () {
    const { classes } = this.props
    return (
      <Container className={classes.container}>
        <Typography variant='h3' component='h1'>
          Últimos Episodios
        </Typography>
        <br />
        <Grid container spacing={4} justify='center'>
          {this.state.episodes.map(episode => {
            return (
              <Grid item xs={12} sm={6} md={3} key={episode.id}>
                <EpisodeCard episode={episode} onButtonClick={this.handleOpenModal} />
              </Grid>
            )
          })}
        </Grid>
        <EpisodeInformation episode={this.state.episode} isOpen={this.state.isOpen} onCloseModal={this.handleCloseModal} />
      </Container>
    )
  }
}

export default withStyles(styles)(LastsEpisodes)
