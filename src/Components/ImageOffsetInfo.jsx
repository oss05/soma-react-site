import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import TitleWhitDecorate from './TitleWhitDecorate';


const ImageOffsetInfo = ({ title, img, description }) => {

  const useStyles = makeStyles((theme) => ({
    roote: {
      boxShadow: '14px 12px 35px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      width: '400px',
      height: '700px',
      paddingBottom: '0px',
      padding: '10px 20px',
      borderRadius: '30px',
      marginTop: '100px',
      borderBottom: `10px solid ${theme.palette.primary.main}`,
      alignItems: 'flex-start',
      
      
      
    },
    imgContainer: {
      width: '100%',
      height: '200px',
      position: 'relative',
      '& img': {
        position: 'relative',
        top: '-50%',
        borderRadius: '20px',
        width: '100%',
        height: '400px',
        cursor: 'pointer',
        objectFit: 'contain'
      },
    },
    detailsContainer: {
      height: '240px',
      [theme.breakpoints.up('md')]: {
        padding: '0px 25px',

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
    <Grid container className={classes.roote} >
      <Grid className={classes.imgContainer} item xs={12} >
        <img src={img} />
      </Grid>
      <Grid item xs={12} className={classes.detailsContainer}>
        <TitleWhitDecorate title={title} />
        <Typography className={classes.info} variant="h6" > {description} </Typography>
      </Grid>
    </Grid>
  )
}

export default ImageOffsetInfo;