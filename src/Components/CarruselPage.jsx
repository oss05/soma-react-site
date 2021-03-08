import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarruselPage = ({ imgs }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // border: '1px solid red',
      borderBottomLeftRadius: '25px',
      borderBottomRightRadius: '25px',
      overflow: 'hidden'
    },
    imgContainer: {
      width: '100%',
      height: '100%',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }
  }))

  const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box className={classes.root}>
      <Grid container xs={12} >
        <Grid item xs={12} >
          {
            <Carousel responsive={responsive} autoPlay infinite>
              {imgs.map(img => (
                <div className={classes.imgContainer} key={img.id}>
                  <img src={img.cover} />
                </div>
              ))}
            </Carousel>
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarruselPage;