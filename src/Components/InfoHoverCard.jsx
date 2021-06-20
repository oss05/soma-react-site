import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const InfoHoverCard = ({ img, title, description, logo }) => {

  const [hovercard, setHovercard] = useState(false);
  const [dinamicstyles, setDinamicstyles] = useState({
    filter: 'grayscale(100%)',
    height: '300px',
    opacity: '1',
  })

  const handleHoverActive = () => {
    if (!hovercard) {
      setHovercard(true)
      setDinamicstyles({
        ...dinamicstyles,
        filter: 'grayscale(0%)',
        height: '400px',
        opacity: '0.6',
      })

    } else {
      setHovercard(false)
      setDinamicstyles({
        ...dinamicstyles,
        filter: 'grayscale(100%)',
        height: '300px',
        opacity: '1',
      })
    }
  }

  const useStyles = makeStyles((theme) => ({
    card: {
      borderTop: '20px solid #00A8BA',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      postion: 'relative',
      transition: 'all 300ms ease',
      backgroundColor: 'black',
      margin: '12px 0'
    },
    title: {
      fontWeight: 'bold'
    },
    media: {
      height: `${dinamicstyles.height}`,
      filter: `${dinamicstyles.filter}`,
      opacity: `${dinamicstyles.opacity}`,

    },
    detailsContainer: {
      backgroundColor: 'transparent',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      color: 'white',
    },
    logoContainer: {
      width: '90px',
      height: '90px',
      backgroundColor: '#F0F0F0',
      border: '5px solid #C4C4C4',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: '80%',
        height: '80%',
      }
    },
    bg: {
      backgroundColor: 'white',
      height: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    animationSweet: {
      animationName: '$entradaSuave',
      animationDuration: '1s',
      animationTimingFunction: 'ease',
    },
    '@keyframes entradaSuave': {
      from: {
        opacity: '0',
      },
      to: {
        opacity: '1',
      }
    }
  }));

  const classes = useStyles();

  return (

    <Card
      className={classes.card}
      onMouseEnter={() => (handleHoverActive())}
      onMouseLeave={() => (handleHoverActive())}
    >
      { !hovercard ?
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={img}
          />
          <CardContent className={classes.bg}>
            <Typography variant="h5" component="h2" align="center" className={classes.title}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        :
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
          />
          <CardContent
            align="center"
            className={classes.detailsContainer}>
            <Box
              className={`${classes.logoContainer} ${classes.animationSweet}`}
            >
              <img src={logo} alt="logo servicio" />
            </Box>
            <Typography className={`${classes.title} ${classes.animationSweet}`} variant="h5" component="h2" align="center">
              {title}
            </Typography>
            <Typography className={classes.animationSweet} component="h2" align="center">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>

      }
    </Card>
  )

}

export default InfoHoverCard;