import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'


const InfoVerticalDecorate = ({ title, details }) => {
  const useStyles = makeStyles((theme) => ({
    decorateContainer: {
      // padding: 20
    },
    titleContainer: {
      borderLeft: `5px solid ${theme.palette.primary.main}`,
      paddingLeft: '10px',
      marginBottom: '20px',
      marginTop: '20px',
    },
    title: {
      fontWeight: 'bold'
    },
    details: {
      color: theme.palette.text.gray,
      fontWeight: 500
    }
  }))

  const classes = useStyles();

  return (
    <Grid container className={classes.decorateContainer}>
      <Grid className={classes.titleContainer} item xs={12} >
        <Typography variant="h5" component="span" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} >
        <Typography variant="body1" className={classes.details}>
          {details}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default InfoVerticalDecorate;