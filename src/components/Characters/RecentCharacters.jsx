import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import CharacterCard from './CharacterCard'
import axios from 'axios'
import CharacterDetails from './CharacterDetails'

class recentCharacters extends Component {
  state = {
    characters: [],
    character: {},
    isOpen: false
  }

  componentDidMount () {
    // Create Array to get 10 random characters from RMAPI
    const randomArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 591))

    // Send get request to RMAPI
    axios.get('https://rickandmortyapi.com/api/character/' + randomArray)
      .then(res => {
        this.setState({ characters: res.data })
      })
  }

  handleOpenModal = (character) => {
    this.setState({
      isOpen: true,
      character
    })
  }

  handleCloseModal = () => {
    console.log('Cerrado')
    this.setState({
      isOpen: false,
      character: {}
    })
  }

  render () {
    return (
      <Container>
        <Typography variant='h3' component='h1'>
          Personajes Recientes
        </Typography>
        <br />
        <Grid container spacing={4} justify='center'>
          {this.state.characters.map(character => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                <CharacterCard character={character} onButtonClick={this.handleOpenModal} />
              </Grid>
            )
          })}
        </Grid>
        <CharacterDetails character={this.state.character} isOpen={this.state.isOpen} onCloseModal={this.handleCloseModal} />
      </Container>
    )
  }
}

export default recentCharacters
