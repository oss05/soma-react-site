import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import CarruselCompany from './CarruselCompany';

const TitleEnterpriseCarrusel = ({title,imgs}) => {
  return (
    <Grid container>
      <Grid item container xs={12} md={3} justify='center' alignItems='center' >
        <Typography variant="h4" > {title} </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <CarruselCompany 
          imgs={imgs}
        />
      </Grid>
    </Grid>
  )
}

export default TitleEnterpriseCarrusel;