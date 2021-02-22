import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const PageTitle = ({title, img}) => {

  const useStyles = makeStyles( (theme) => ({
    root: {
      border: '1px solid red'
    },
    imgContainer: {
      width: '100%',
      height: '100px',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
    title: {
      marginLeft: '20px'
    }
    
  }));

  const classes = useStyles();

  return (
    <Box>
      <Grid container xs={12} >
        <Grid className={classes.imgContainer} item xs={2} >
          <img src={img} />
        </Grid>
        <Grid item xs={10} >
          <Typography className={classes.title} component="h1" variant="h2">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PageTitle;