import React, { Component } from 'react'
import { Modal, withStyles, Card, CardContent, Typography, Button, CardMedia, CardActions } from '@material-ui/core'
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

class CharacterDetails extends Component {
  render () {
    const { character, isOpen, onCloseModal, classes } = this.props
    return (
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={onCloseModal}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {character.name ? (
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={character.image}
              title={character.name}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component='h5' variant='h5'>
                  {character.name}
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  <ul>
                    <li><strong>Estado: </strong>{character.status}</li>
                    <li><strong>Origen: </strong>{character.origin.name}</li>
                    <li><strong>Genero: </strong>{character.gender}</li>
                    <li><strong>Especie: </strong>{character.species}</li>
                    <li><strong>Ubicación: </strong>{character.location.name}</li>
                    <li><strong>Creado: </strong><Moment local fromNow>{character.created}</Moment></li>
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

export default withStyles(styles)(CharacterDetails)
