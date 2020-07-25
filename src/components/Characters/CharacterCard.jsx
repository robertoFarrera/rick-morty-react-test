import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button, withStyles } from '@material-ui/core'

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%'
  }
})

class characterCard extends Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <Card>
          <CardHeader
            title='Rick Sanchez'
            subheader='Alive'
          />
          <CardMedia
            className={classes.media}
            image='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              Species: Human
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Gender: Male
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='secondary'>
              Ver detalles
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(characterCard)
