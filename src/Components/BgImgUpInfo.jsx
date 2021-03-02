import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import flecha from '../Assets/imgs/arrow-r.png';


const BgImgUpImg = ({ title, description, logo }) => {


  const useStyles = makeStyles((theme) => ({
    card: {
      boxShadow: 'none',
      borderRadius: '20px',
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      paddingTop: '150px',
      marginRight: '20px',
      height: '300px',
      
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },

    detailsContainer: {
      width: '90%',
      backgroundColor: 'black',
      position: 'absolute',
      bottom: '0',
      color: 'black',
      opacity: '0.9',
      color: 'white',
      padding: '0px 5%',
      cursor: 'pointer',
      '&:hover': {
        '& h2:nth-of-type(2)': {
          display: 'block'
        }
      }
    },
    arrow: {
      margin: '15px 0px'
    },
    description: {
      display: 'none',
      textAlign: 'center',
    }
  }));

  const classes = useStyles();

  return (

    <Card
      className={classes.card} >
      <CardContent
        align="center"
        className={classes.detailsContainer}>
        <img className={classes.arrow} src={flecha} />
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

export default BgImgUpImg;