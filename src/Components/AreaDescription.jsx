import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'
const AreaDescription = ({img, children}) => {

  const useStyles = makeStyles( (theme) => ({
    root: {
      backgroundColor: '#f8f8f8',
      height: '100%'
    },
    containerMaster: {
      height: '100%'
    },
    left: {
      display: 'block',
      padding: '20px 0px 20px 30px',
    },
    right: {
      display: 'block',
      borderTopLeftRadius: '25px',
      borderBottomLeftRadius: '25px',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
    top: {
      borderTopLeftRadius: '25px',
      borderTopRightRadius: '25px',
      overflow: 'hidden',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      },
      '& img': {
        width: '100%',
        height: '100%'
      }
    }
  }));

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container 
      className={classes.containerMaster}
      xs={12}
      >
        <Grid item xs={12} className={classes.top}>
          <img src={img} alt=""/>
        </Grid>
        <Grid item container md={8} className={classes.left}>
          {children}
        </Grid>
        <Grid item md={4} className={classes.right}>
          <img src={img} alt=""/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AreaDescription;