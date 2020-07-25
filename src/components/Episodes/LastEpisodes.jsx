import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import EpisodeCard from './EpisodeCard'

class LastEpisodes extends Component {
  render () {
    return (
      <Container>
        <h1>Últimos Episodios</h1>
        <Grid container spacing={4} justify='center'>
          <Grid item md={4} lg={3}>
            <EpisodeCard />
          </Grid>
          <Grid item md={4} lg={3}>
            <EpisodeCard />
          </Grid>
          <Grid item md={4} lg={3}>
            <EpisodeCard />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default LastEpisodes
