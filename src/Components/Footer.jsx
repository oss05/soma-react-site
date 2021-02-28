import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {

  const useStyles = makeStyles( (theme) => ({
    root: {
      backgroundColor: '#1A1A1A',
      color: 'white',
      padding: '20px 0px'
    },
    right: {
      textAlign: 'center'
    },
    icons: {
      marginTop: '20px',
      '& span': {
        marginRight: '15px'
      }
    },
    derechos: {
      fontSize: '18px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  }) )

  const classes = useStyles()

  return (
    <Grid container xs={12} className={classes.root} >
      <Grid item md={8} xs={0} > 
        <Typography className={classes.derechos} variant="h6" align='center' >® 2020 Todos los derechos reservados</Typography>
      </Grid>
      <Grid item container justify='space-between' alignItems='center' md={4} xs={12} className={classes.right} >
        <Grid xs={12} >
          <Typography variant="h6" >Unete a la conversación</Typography>
        </Grid>
        <Grid item className={classes.icons} xs={12} >
          <span> <FacebookIcon/> </span>
          <span> <TwitterIcon /> </span>
          <span> <InstagramIcon /> </span>
          <span> <PinterestIcon /> </span>
          <span> <LinkedInIcon /> </span>
        </Grid>
      </Grid>
    </Grid>
  )
}
