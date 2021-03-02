import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Paper } from '@material-ui/core'
import TitleWhitDecorate from './TitleWhitDecorate';
import Button1 from './Button1';

const InfoImage = ({ title, img, description, direction }) => {


  const useStyles = makeStyles((theme) => ({
    root: {
      // overflow: 'hidden',
      padding: '20px',
    },
    title: {
      fontWeight: 'bold',
      marginTop: 10
      // borderBottom: `solid 8px ${theme.palette.primary.main}`
    },
    imgContainer: {
      // boxShadow: '7px 4px 8px 7px rgba(0, 0, 0, 0.25)',
      // overflow: 'hidden',
      // width: '100%',
      background: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        borderRadius: '30px',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 30
        // cursor: 'pointer',
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
        padding: '30px',
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
    },

  }));

  const classes = useStyles();

  const descriptionList = description.map(element => {
    return (
      <li style={{ margin: '8px 0' }}>{element}</li>
    )
  })

  return (
    <Grid container className={classes.root} >
      <Grid className={classes.imgContainerResponsive} item md={6} xs={12} >
        <img src={img} />
      </Grid>
      <Grid container justify="center" direction={direction}>
        <Grid item md={7} xs={12} className={classes.detailsContainer}>
          <Typography variant="h5" className={classes.title}> {title} </Typography>
          <Typography className={classes.info} variant="h6" >
            <ul style={{ paddingLeft: 20 }}>
              {descriptionList}
            </ul>
          </Typography>
        </Grid>
        <Grid container alignItems="center" item md={5} xs={12} >
          <Paper elevation={5} className={classes.imgContainer}>
            <img src={img} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )

}

export default InfoImage;