import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import TitleWhitDecorate from './TitleWhitDecorate';


const ImageOffsetInfo = ({title,img,description}) => {

  const useStyles = makeStyles( (theme) => ({
    root: {
      boxShadow: '14px 12px 35px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      padding: '20px',
      borderRadius: '30px',
      marginTop: '100px',
      paddingBottom: '50px',
      borderBottom: `10px solid ${theme.palette.primary.main}`
    },
    imgContainer: {
      
      width: '100%',
      '& img': {
        position: 'relative',
        top: '-30%',
        borderRadius: '20px',
        width: '100%',
        height: '125%',
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