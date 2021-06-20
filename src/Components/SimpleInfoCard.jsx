import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

const SimpleInfoCard = ({title,description,logo}) => {
  

  const useStyles = makeStyles( (theme) => ({
    card: {
      boxShadow: 'none'
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    detailsContainer: {
      backgroundColor: 'white',
      color: 'black',
      padding: '50px',
      
    },
    logoContainer: {
      width: '90px',
      height: '90px',
      marginBottom: '20px',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    },
    listContainer: {
      listStyle: 'none',
      padding: '0px',
      '& li h2': {
      }
    }
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
        <ul className={classes.listContainer}>
          {description.map( item => (
            <li key={item.id}>
              <Typography className={classes.description} component="h2" align="center">
                {item.data}
              </Typography>
            </li>
          ) )}
        </ul>
        
      </CardContent>
    </Card>
  )

}

export default SimpleInfoCard;