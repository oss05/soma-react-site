import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const Button1 = ({title}) => {
  const useStyles = makeStyles( (theme) => ({
    root: {
      marginTop: '40px'
    },
    azul: {
      color: 'blue'
    },
    line: {
      width: '20px',
      border: '1px solid grey'
    }
  }) )

  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained">
      <div className={classes.line}></div> &nbsp; &nbsp; QUIERO &nbsp;<span className={classes.azul} >SABER MÁS</span>
    </Button>
  )
}

export default Button1;