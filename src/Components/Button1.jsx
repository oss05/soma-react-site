import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Button1 = ({ title, text1, text2 }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '10px',
      fontWeight: 'bold',
      background: 'transparent',
      borderRadius: 0,
      border: 'solid 2px'
    },
    azul: {
      color: theme.palette.primary.main,
      marginRight: 10
    },
    line: {
      width: '20px',
      border: '1px solid grey'
    }
  }))

  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained">
      {text1} &nbsp;<span className={classes.azul}>{text2} </span><ArrowForwardIcon />
    </Button>
  )
}

export default Button1;