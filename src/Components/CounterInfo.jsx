import React, { useRef, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';

const CounterInfo = () => {

  const data = {
    n1: {
      title: 'Nos enfocamos en tus clientes',
      details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, soluta culpa eaque illum dolor minus repellat reprehenderit facilis maxime ullam facere praesentium? Velit fugit culpa quisquam non doloribus fuga explicabo.'
    },
    n2: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      details: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Praesent elementum facilisis leo vel. Nulla aliquet porttitor lacus luctus accumsan tortor.'
    },
    n3: {
      title: 'Risus pretium quam vulputate dignissim suspendisse in est ante. ',
      details: 'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Quam quisque id diam vel quam elementum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.'
    },
    n4: {
      title: 'Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. ',
      details: 'Placerat duis ultricies lacus sed turpis tincidunt. Non enim praesent elementum facilisis leo vel fringilla est. Faucibus ornare suspendisse sed nisi lacus sed. Eget lorem dolor sed viverra ipsum nunc aliquet. Metus dictum at tempor commodo ullamcorper a lacus.'
    },
    n5: {
      title: 'Contrary to popular belief, Lorem Ipsum is not ',
      details: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    },
  }
  const [ datat, setDatat ] = useState({
    title: 'Nos enfocamos en tus clientes',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, soluta culpa eaque illum dolor minus repellat reprehenderit facilis maxime ullam facere praesentium? Velit fugit culpa quisquam non doloribus fuga explicabo.'
  })
  const infoContainer = useRef();
  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();
  const number5 = useRef();

  const handleInfo = (number) => {
    infoContainer.current.style.visibility='visible';
    switch(number){
      case '1':
        setDatat({
          title: data.n1.title,
          description: data.n1.details,
        }) 
        infoContainer.current.style.backgroundColor='#F2AC57'
      break;
      case '2':
        setDatat({
          title: data.n2.title,
          description: data.n2.details,
        }) 
        infoContainer.current.style.backgroundColor='#FF7171'
      break;
      case '3':
        setDatat({
          title: data.n3.title,
          description: data.n3.details
        })
        infoContainer.current.style.backgroundColor='#14A38B' 
      break;
      case '4':
        setDatat({
          title: data.n4.title,
          description: data.n4.details
        })
        infoContainer.current.style.backgroundColor='#0880AE' 
      break;
      case '5':
        setDatat({
          title: data.n5.title,
          description: data.n5.details
        }) 
        infoContainer.current.style.backgroundColor='#2C2738' 
      break;
    }
  }

  const handleDesactive = () =>{
    infoContainer.current.style.visibility='hidden';
  }
  
  const useStyles = makeStyles( (theme) => ({
    root:{
      padding: '10px 0px'

    },
    numbersContainer: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
      }
    },
    numberContainer: {
      width: '50px',
      height: '50px',
      borderTopLeftRadius: '15px',
      color: 'white',
      cursor: 'pointer',
      
    },
    descriptionContainer: {
      margin: '25px 0px',
    },
    infoNumber: {
      padding: '25px',
      visibility: 'hidden'
    },
    infoNumberDecorate: {
      margin: '20px 0px',
      width: '95px',
      height: '7px',
      backgroundColor: 'white',
    },
    title: {
      color: 'white'
    }
  }) )

  const classes = useStyles();

  const handleColor = () => {
    number1.current.style.backgroundColor='#F2AC57';
    number2.current.style.backgroundColor='#FF7171';
    number3.current.style.backgroundColor='#14A38B';
    number4.current.style.backgroundColor='#0880AE';
    number5.current.style.backgroundColor='#2C2738';
  }

  useEffect( () => (
    handleColor()
  ) )

  return(
    <Grid container xs={12} className={classes.root} >
      <Grid item xs={12} >
        <Typography component='h2' variant='h4' >¿Estás pensando en un nuevo sitio web?</Typography>
      </Grid>
      <Grid item xs={12} className={classes.descriptionContainer} >
        <Typography component='h2' variant='h6' > Conoce 5 razones por las que debes apostar con nosotros </Typography>
      </Grid>
      <Grid item container md={12} xs={2} justify='space-between' className={classes.numbersContainer} >
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={ () => (handleDesactive()) } onMouseOver={() =>(handleInfo('1'))} ref={number1} >
          <Typography component='h1' variant='h4' > 1 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={ () => (handleDesactive()) } onMouseOver={() =>(handleInfo('2'))} ref={number2} >
          <Typography component='h1' variant='h4' > 2 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={ () => (handleDesactive()) } onMouseOver={() =>(handleInfo('3'))} ref={number3} >
          <Typography component='h1' variant='h4' > 3 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={ () => (handleDesactive()) } onMouseOver={() =>(handleInfo('4'))} ref={number4} >
          <Typography component='h1' variant='h4' > 4 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={ () => (handleDesactive()) } onMouseOver={() =>(handleInfo('5'))} ref={number5} >
          <Typography component='h1' variant='h4' > 5 </Typography>
        </Grid>
      </Grid>
      <Grid item container md={12} xs={10} className={classes.infoNumber} ref={infoContainer} >
        <Grid item md={12} >
          <div className={classes.infoNumberDecorate} ></div>
          <Typography className={classes.title} component='h2' variant='h4' > {datat.title} </Typography>
        </Grid>
        <Grid item md={12} className={classes.descriptionContainer} >
          <Typography component='h2' variant='h6' > {datat.description} </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CounterInfo;