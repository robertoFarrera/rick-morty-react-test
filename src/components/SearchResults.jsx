import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, withStyles, Typography } from '@material-ui/core'
import CharacterCard from './Characters/CharacterCard'
import { Pagination, Alert, AlertTitle } from '@material-ui/lab'
import loader from '../images/loading.svg'
import EpisodeCard from './Episodes/EpisodeCard'
import CharacterDetails from './Characters/CharacterDetails'
import EpisodeInformation from './Episodes/EpisodeInformation'

const styles = theme => ({
  marginY: {
    margin: '4rem 0'
  }
})

class SearchResults extends Component {
  state = {
    characters: [],
    characterInfo: {},
    characterPage: 1,
    characterLoading: true,
    character: {},
    characterIsOpen: false,
    episodes: [],
    episodeInfo: {},
    episodePage: 1,
    episodeLoading: true,
    episode: {},
    episodeIsOpen: false
  }

  query = new URLSearchParams(this.props.location.search).get('texto')

  componentDidMount () {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${this.query}`)
      .then(res => {
        this.setState({ characters: res.data.results })
        this.setState({ characterInfo: res.data.info })
        this.setState({ characterLoading: false })
      })
      .catch(() => {
        this.setState({ characterLoading: false })
      })
    axios.get(`https://rickandmortyapi.com/api/episode/?name=${this.query}`)
      .then(res => {
        this.setState({ episodes: res.data.results })
        this.setState({ episodeInfo: res.data.info })
        this.setState({ episodeLoading: false })
      })
      .catch(() => {
        this.setState({ episodeLoading: false })
      })
  }

  handleCharacterPagination = (event, value) => {
    this.setState({ characterLoading: true })
    axios.get(`https://rickandmortyapi.com/api/character/?name=${this.query}&page=${value}`)
      .then(res => {
        this.setState({ characters: res.data.results })
        this.setState({ characterInfo: res.data.info })
        this.setState({ characterPage: value })
        this.setState({ characterLoading: false })
      })
  }

  handleEpisodePagination = (event, value) => {
    this.setState({ episodeLoading: true })
    axios.get(`https://rickandmortyapi.com/api/episode/?name=${this.query}&page=${value}`)
      .then(res => {
        this.setState({ episodes: res.data.results })
        this.setState({ episodeInfo: res.data.info })
        this.setState({ episodePage: value })
        this.setState({ episodeLoading: false })
      })
  }

  handleOpenCharacterModal = (character) => {
    this.setState({
      characterIsOpen: true,
      character
    })
  }

  handleCloseCharacterModal = () => {
    console.log('Cerrado')
    this.setState({
      characterIsOpen: false,
      character: {}
    })
  }

  handleOpenEpisodeModal = (episode) => {
    this.setState({
      episodeIsOpen: true,
      episode
    })
  }

  handleCloseEpisodeModal = () => {
    console.log('Cerrado')
    this.setState({
      episodeIsOpen: false,
      episode: {}
    })
  }

  render () {
    const { classes } = this.props
    return (
      <main>
        {// Render loading efect with animated gif
          this.state.characterLoading ? (
            <Grid container justify='center' className={classes.marginY}>
              <Grid item>
                <img src={loader} alt='Cargando' />
                <p>Cargando...</p>
              </Grid>
            </Grid>
            // Render error alert if not faund results
          ) : this.state.characters.length === 0 ? (
            <Container>
              <Alert severity='error'>
                <AlertTitle>No se encontraron resultados</AlertTitle>
              No hay resultados resultados de: <strong>{this.query}</strong>
              </Alert>
            </Container>
          ) : (
          // Render search results
            <Container>
              <Alert severity='info'>
                <AlertTitle>Resultados de búsqueda</AlertTitle>
              Se muestran resultados de: <strong>{this.query}</strong>
              </Alert>
              <Typography variant='h3' component='h2'>
                    Personajes
              </Typography>
              <br />
              <Grid container spacing={4} justify='center'>
                {this.state.characters.map(character => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                      <CharacterCard character={character} onButtonClick={this.handleOpenCharacterModal} />
                    </Grid>
                  )
                })}
              </Grid>
              <Grid container justify='center' className={classes.marginY}>
                <Grid item>
                  <Pagination count={this.state.characterInfo.pages} page={this.state.characterPage} color='primary' onChange={this.handleCharacterPagination} />
                </Grid>
              </Grid>
              <CharacterDetails character={this.state.character} isOpen={this.state.characterIsOpen} onCloseModal={this.handleCloseCharacterModal} />
            </Container>
          )
        }{
          // Render loading efect with animated gif
          this.state.episodeLoading ? (
            <Grid container justify='center' className={classes.marginY}>
              <Grid item>
                <img src={loader} alt='Cargando' />
                <p>Cargando...</p>
              </Grid>
            </Grid>
            // Render error alert if not faund results
          ) : this.state.episodes.length === 0 ? (
            <Container>
              <Alert severity='error'>
                <AlertTitle>No se encontraron resultados</AlertTitle>
                  No hay resultados resultados de: <strong>{this.query}</strong>
              </Alert>
            </Container>
          ) : (
          // Render search results
            <Container>
              <Typography variant='h3' component='h2' className={classes.marginY}>
                    Episodios
              </Typography>
              <Grid container spacing={4} justify='center'>
                {this.state.episodes.map(episode => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={episode.id}>
                      <EpisodeCard episode={episode} onButtonClick={this.handleOpenEpisodeModal} />
                    </Grid>
                  )
                })}
              </Grid>
              <Grid container justify='center' className={classes.marginY}>
                <Grid item>
                  <Pagination count={this.state.episodeInfo.pages} page={this.state.episodePage} color='primary' onChange={this.handleEpisodePagination} />
                </Grid>
              </Grid>
              <EpisodeInformation episode={this.state.episode} isOpen={this.state.episodeIsOpen} onCloseModal={this.handleCloseEpisodeModal} />
            </Container>
          )
        }
      </main>
    )
  }
}

export default withStyles(styles)(SearchResults)
