import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const CarruselCompany = ({imgs}) => {

  const useStyles = makeStyles( (theme) => ({
    root: {
      boxShadow: '-8px 8px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      borderTopLeftRadius: '15px',
      borderBottomLeftRadius: '15px'
    },
    imgContainer: {
      padding: '10px 10px',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      '& img': {
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        transition: 'all 650ms ease'
      },
      '& img:hover': {
        transform: 'scale(1.1)'
      }
    }
  }) )

  const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <Box className={classes.root}>
      <Carousel responsive={responsive}>
        {imgs.map( img => (
          <div className={classes.imgContainer} key={img.id}>
            <img src={img.cover} alt="empresa"/>
          </div>
        ) )}
      </Carousel>
    </ Box>
  )

}

export default CarruselCompany;