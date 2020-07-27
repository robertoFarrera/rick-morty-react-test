import React, { Component } from 'react'
import { Card, CardHeader, CardActions, Button, withStyles, Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    maxWidth: '265px',
    margin: '0 auto',
    '& .MuiCardHeader-root': {
      display: 'block'
    }
  }
})

class EpisodeCard extends Component {
  render () {
    const { classes, episode } = this.props
    return (
      <div>
        <Card className={classes.root} raised>
          <CardHeader
            title={
              <Typography variant='h5' noWrap>
                {episode.name}
              </Typography>
            }
            subheader={episode.episode}
          />
          <CardActions>
            <Button color='primary' onClick={() => this.props.onButtonClick(episode)}>
              Ver detalles
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(EpisodeCard)
