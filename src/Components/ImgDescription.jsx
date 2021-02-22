import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import TitleWhitDecorate from './TitleWhitDecorate';

const ImgDescription = ({title,img,description}) => {

  const useStyles = makeStyles( (theme) => ({
    imgContainer: {
      width: '100%',
      '& img': {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      },
    },
    detailsContainer: {
      padding: '20px 30px'
    },
    info: {
      marginTop: '20px'
    }

  }));

  const classes = useStyles();

  return (
    <Grid container>
      <Grid className={classes.imgContainer} item md={6} xs={12} >
        <img src={img} />
      </Grid>
      <Grid item md={6} xs={12} className={classes.detailsContainer}>
        <TitleWhitDecorate title={title} />
        <Typography className={classes.info} variant="h6" > {description} </Typography>
      </Grid>
    </Grid>
  )
}

export default ImgDescription;