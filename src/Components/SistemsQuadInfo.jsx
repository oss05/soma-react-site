import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const SistemsQuadInfo = ({ img, title, description }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '10px',
      // backgroundColor: '#E5E5E5',
      display: 'flex',
      // width: '100%',
      boxShadow: 'none',
      flexDirection: 'row',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center'
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      // width: '80%',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '50%',
      marginRight: '10px',
      backgroundSize: 'contain',
      [theme.breakpoints.down('md')]: {
        margin: '0px 0px',
        height: '110px',
        marginRight: 0,

      },
    },
    title: {
      fontSize: '25px',
      fontWeight: 'bold',
      marginBottom: '0.5em',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    subtitle: {
      color: '#707070',
      fontSize: '15px',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={img}
        title={title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component="h5" variant="h5">
            {title}
          </Typography>
          <Typography className={classes.subtitle} variant="p" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default SistemsQuadInfo;