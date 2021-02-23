import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BgImgUpInfo from './BgImgUpInfo';

const CarruselBgImgUpInfo = ({data}) => {

  const useStyles = makeStyles( (theme) => ({
    root: {
      backgroundColor: 'transparent',
      
    },
  }) )

  const classes = useStyles();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  return (
    <Box className={classes.root}>
      <Carousel responsive={responsive}>
        {data.map( data => (
          <div key={data.id}>
            <BgImgUpInfo title={data.title} description={data.description} logo={data.logo}  />
          </div>
        ) )}
      </Carousel>
    </ Box>
  )

}

export default CarruselBgImgUpInfo;