import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import TitleWhitDecorate from './TitleWhitDecorate';
import Button1 from './Button1';

const InfoImage = ({title,img,description}) => {

  
  const useStyles = makeStyles( (theme) => ({
    root: {
      overflow: 'hidden',
      padding: '20px',
    },
    imgContainer: {
      boxShadow: '7px 4px 8px 7px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        borderRadius: '30px',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& img': {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      },
    },
    imgContainerResponsive: {
      boxShadow: '7px 4px 8px 7px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.down('lg')]: {
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
      },
      '& img': {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      },
    },
    detailsContainer: {
      [theme.breakpoints.up('md')]: {
        padding: '80px 50px',
      },
      [theme.breakpoints.down('md')]: {
        padding: '15px',
      }
    },
    info: {
      marginTop: '20px',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px'
      }
    }

  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root} >
      <Grid className={classes.imgContainerResponsive} item md={6} xs={12} >
        <img src={img} />
      </Grid>
      <Grid item md={6} xs={12} className={classes.detailsContainer}>
        <Typography variant="h3" > {title} </Typography>
        <Typography className={classes.info} variant="h6" > {description} </Typography>
      </Grid>
      <Grid className={classes.imgContainer} item md={6} xs={12} >
        <img src={img} />
      </Grid>
    </Grid>
  )

}

export default InfoImage;