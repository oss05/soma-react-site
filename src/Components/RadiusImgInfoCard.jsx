import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const RadiusImgCard = ({title,description,logo}) => {
  

  const useStyles = makeStyles( (theme) => ({
    card: {
      boxShadow: '0px 12px 24px rgba(44, 39, 56, 0.02), 0px 24px 48px rgba(44, 39, 56, 0.04)',
      borderRadius: '20px'
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    detailsContainer: {
      backgroundColor: 'white',
      color: 'black',
      padding: '20px',
    },
    logoContainer: {
      width: '100%',
      marginBottom: '20px',
      borderRadius: '20px',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
  }));

  const classes = useStyles();

  return(
    
    <Card 
    className={classes.card} >
      <CardContent
      align="center"
      className={classes.detailsContainer}>
        <Box
        className={`${classes.logoContainer}`} 
        >
          <img src={logo} />
        </Box>
        <Typography className={`${classes.title}`} variant="h6" component="h2" align="center">
          {title}
        </Typography>
        <Typography className={classes.description} component="h2" align="left">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )

}

export default RadiusImgCard;