import React from 'react'
import { Container, Typography } from '@material-ui/core'

const Page404 = () => {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h3'>
        Error 404
      </Typography>
      <hr /><br />
      <Typography variant='h5'>
        La página que buscas no se encuentra!
      </Typography>
    </Container>
  )
}

export default Page404
