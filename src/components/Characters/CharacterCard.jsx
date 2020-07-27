import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardActions, Button, withStyles, Badge, Container, Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    maxWidth: '265px',
    margin: '0 auto',
    '& .MuiCardHeader-root': {
      display: 'block'
    }
  },
  media: {
    width: '100%',
    height: 0,
    paddingTop: '100%'
  },
  green: {
    color: '#fff',
    '& .MuiBadge-badge': {
      backgroundColor: '#66bb6a'
    }
  },
  red: {
    color: '#fff',
    '& .MuiBadge-badge': {
      backgroundColor: '#f44336'
    }
  },
  grey: {
    color: '#fff',
    '& .MuiBadge-badge': {
      backgroundColor: '#b0bec5'
    }
  }
})

class characterCard extends Component {
  render () {
    const { classes, character } = this.props
    return (
      <Card className={classes.root} raised>
        <CardHeader
          title={
            <Typography variant='h5' noWrap>
              {character.name}
            </Typography>
          }
          subheader={
            <Container>
              <Badge
                badgeContent={character.status} className={
                  (character.status === 'Alive' ? classes.green
                    : character.status === 'Dead' ? classes.red : classes.grey)
                }
              />
            </Container>
          }
        />

        <CardMedia
          className={classes.media}
          image={character.image}
          title={character.name}
        />
        <CardActions>
          <Button color='primary' onClick={() => this.props.onButtonClick(character)}>
            Ver detalles
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(characterCard)
