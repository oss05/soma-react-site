import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const PageTitle = ({ title, img }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      border: '1px solid red'
    },
    imgContainer: {
      width: '100%',
      height: '100px',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      }
    },
    title: {
      paddingLeft: '20px',
      fontWeight: 'bold'
    },
    areaDisplay: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        marginTop: 120
      }
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.areaDisplay}>
      <Grid container alignItems="center" xs={12} >
        <Grid className={classes.imgContainer} item xs={2} >
          <img src={img} />
        </Grid>
        <Grid item xs={10} >
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PageTitle;