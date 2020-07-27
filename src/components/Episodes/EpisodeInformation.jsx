import React, { Component } from 'react'
import { Modal, withStyles, Card, CardContent, Typography, Button, CardActions } from '@material-ui/core'
import Moment from 'react-moment'

const styles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    maxHeight: '100vh',
    overflowY: 'auto',
    display: 'inline-flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    paddingTop: '100%',
    margin: '0 auto',
    width: '265px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0
    }
  }
})

class EpisodeInformation extends Component {
  render () {
    const { episode, isOpen, onCloseModal, classes } = this.props
    return (
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={onCloseModal}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {episode.name ? (
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component='h5' variant='h5'>
                  {episode.name}
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  <ul>
                    <li><strong>Código de episodio: </strong>{episode.episode}</li>
                    <li><strong>Fecha de transmisión: </strong>{episode.air_date}</li>
                    <li><strong>Creado: </strong><Moment local fromNow>{episode.created}</Moment></li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button color='primary' onClick={() => onCloseModal()}>
                  Cerrar
                </Button>
              </CardActions>
            </div>
          </Card>
        ) : (<div />)}
      </Modal>
    )
  }
}

export default withStyles(styles)(EpisodeInformation)
