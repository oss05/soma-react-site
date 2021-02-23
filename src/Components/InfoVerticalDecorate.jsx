import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'


const InfoVerticalDecorate = ({title, details, subTitle}) => {
  const useStyles = makeStyles( (theme) => ({
    titleContainer: {
      borderLeft: `5px solid ${theme.palette.primary.main}`,
      paddingLeft: '10px',
      marginBottom: '20px',
      marginTop: '20px'
    }
  }) )
  
  const classes = useStyles();

  return (
    <Grid container>
      <Grid className={classes.titleContainer} item xs={12} >
        <Typography variant="h6" component="h1" >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} >
        <Typography component="h1" variant="p" >
          {subTitle}
        </Typography>
      </Grid>
      <Grid item xs={12} >
        <Typography variant="p"  >
          {details}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default InfoVerticalDecorate;