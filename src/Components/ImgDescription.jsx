import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import TitleWhitDecorate from './TitleWhitDecorate';
import Button1 from './Button1';

const ImgDescription = ({ title, img, description }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      boxShadow: '3px 4px 20px rgba(0, 0, 0, 0.25)',
      background: '#F8F8F8',
      borderRadius: '20px',
      overflow: 'hidden'
    },
    imgContainer: {
      overflow: 'hidden',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        borderBottomRightRadius: '25px',
        borderTopRightRadius: '25px',
      },
      [theme.breakpoints.down('md')]: {
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
    },
    detailsContainer: {
      [theme.breakpoints.up('md')]: {
        padding: '30px 50px',
        borderRight: `10px solid ${theme.palette.primary.main}`,
      },
      [theme.breakpoints.down('md')]: {
        padding: '10px 30px',
      }
    },
    info: {
      marginTop: '40px',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px'
      },
      fontWeight: 500
    }

  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root} >
      <Grid className={classes.imgContainer} item md={6} xs={12} >
        <img src={img} />
      </Grid>
      <Grid item md={6} xs={12} className={classes.detailsContainer}>
        <TitleWhitDecorate title={title} />
        <Typography className={classes.info} variant="p" > {description} </Typography>
        <Grid item style={{ marginTop: 80 }}>
          <Button1
            text1="Quiero"
            text2="Saber más"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ImgDescription;