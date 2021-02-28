import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import InfoVerticalDecorate from './InfoVerticalDecorate';

const DescriptiveCard = ({title,description,logo}) => {


  const useStyles = makeStyles( (theme) => ({
    card: {
      border: '1px solid #DADADA',
      borderRadius: '20px',
      transition: 'all 600ms ease',
      '&:hover': {
        border: '1px solid #00A8BA',
        borderTop: '20px solid #00A8BA',
        transform: 'scale(1.1)',
        '& > div:nth-of-type(1)': {
          display: 'none'
        },
        '& > div:nth-of-type(2)': {
          display: 'block !important'
        }
      }
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    detailsContainer: {
      backgroundColor: '#F8F8F8',
      color: '#C4C4C4',
      padding: '50px 20px'
    },
    detailsContainerHover: {
      backgroundColor: 'white',
      color: 'black',
      padding: '50px',
      display: 'none'
    },
    logoContainer: {
      filter: 'grayscale(100%)',
      width: '90px',
      height: '90px',
      marginBottom: '20px',
      '& img': {
        width: '100%',
        height: '100%',
      }
    },
    logoContainerHover: {
      filter: 'grayscale(0%)',
      width: '90px',
      height: '90px',
      marginBottom: '20px',
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
          <Typography className={`${classes.title}`} variant="h5" component="h2" align="center">
            {title}
          </Typography>
          <Typography className={classes.description} component="h2" align="center">
            {description}
          </Typography>
        </CardContent>


        <CardContent
        align="center"
        className={classes.detailsContainerHover}>
          <Box
          className={`${classes.logoContainerHover}`} 
          >
            <img src={logo} />
          </Box>
          <InfoVerticalDecorate title={title} />
          <Typography className={classes.description} component="h2" align="center">
            {description}
          </Typography>
        </CardContent>
    </Card>
  )

}

export default DescriptiveCard;