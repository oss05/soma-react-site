import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const SistemsQuadInfo = ({img, title, description}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
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
      width: '80%',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '20%',
      margin: '30px 0px',
      backgroundSize: 'auto 100%',
      [theme.breakpoints.down('md')]: {
        margin: '0px 0px',
        height: '110px'
      },
    },
    title: {
      fontSize: '20px',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    subtitle: {
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
          <Typography className={classes.subtitle} variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default SistemsQuadInfo;