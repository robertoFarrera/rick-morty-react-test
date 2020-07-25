import React, { Component } from 'react'
import { Card, CardHeader, CardActions, Button, withStyles } from '@material-ui/core'

const styles = theme => ({

})

class EpisodeCard extends Component {
  render () {
    return (
      <div>
        <Card>
          <CardHeader
            title='The Ricklantis Mixup'
            subheader='September 10, 2017'
          />
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

export default withStyles(styles)(EpisodeCard)
