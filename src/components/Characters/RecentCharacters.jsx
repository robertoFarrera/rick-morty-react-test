import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import CharacterCard from './CharacterCard'

class recentCharacters extends Component {
  render () {
    return (
      <Container>
        <h1>Personajes Recientes</h1>
        <Grid container spacing={4} justify='center'>
          <Grid item md={4} lg={3}>
            <CharacterCard />
          </Grid>
          <Grid item md={4} lg={3}>
            <CharacterCard />
          </Grid>
          <Grid item md={4} lg={3}>
            <CharacterCard />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default recentCharacters
