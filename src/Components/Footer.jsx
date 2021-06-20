import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import somafooter from '../Assets/imgs/somafooter.PNG'

export default function Footer() {

  const useStyles = makeStyles( (theme) => ({
    root: {
      backgroundColor: '#1A1A1A',
      color: 'white',
      padding: '20px 0px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
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
      margin: '20px 0',
    },
    root1: {
      [theme.breakpoints.down('md')]: {
        backgroundColor: '#1A1A1A',
        color: 'white',
        padding: '20px 0px',
        display: 'block'
      },
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
      
    },
    img: {
      width: '80%',
    }

  }) )

  const classes = useStyles()

  return (
    <>
    <Grid container xs={12} className={classes.root} >
      <Grid item md={4}  > 
        <img src={somafooter} className={classes.img}/>
      </Grid>
      <Grid item md={4}  > 
        <Typography className={classes.derechos} variant="h6" align='center' >® 2020 Todos los derechos reservados</Typography>
      </Grid>
      <Grid item container justify='space-between' alignItems='center' md={4}  className={classes.right} >
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


    <Grid container xs={12} className={classes.root1} >
      
      <Grid item container justify='space-between' alignItems='center' xs={12}  className={classes.right} >
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
      <Grid item xs={12}  > 
        <Typography className={classes.derechos} variant="h6" align='center' >® 2020 Todos los derechos reservados</Typography>
      </Grid>
      <Grid item container xs={12} justify='center'  > 
        <img src={somafooter} className={classes.img} />
      </Grid>
      
    </Grid>
    </>
  )
}
