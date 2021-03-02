import React, { useRef, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const CounterInfo = () => {

  const data = {
    n1: {
      title: 'Analizamos tus ideas y objetivos comerciales',
      details: 'Antes de comenzar a trabajar en el diseño de un sitio web, hablamos mucho: queremos comprender su negocio y los objetivos que se proponga, queremos conocer a sus clientes.'
    },
    n2: {
      title: 'Nos enfocamos en tus clientes',
      details: 'Llamaremos su atención y les animamos a que se pongan en contacto con usted , ajustando el sitio web a su conveniencia, necesidades y expectativas. Te sugerimos soluciones óptimas para sacar el máximo partidop a tu proyecto'
    },
    n3: {
      title: 'Brindaremos todo el apoyo necesario',
      details: 'Llamaremos su atención y les animamos a que se pongan en contacto con usted , ajustando el sitio web a su conveniencia, necesidades y expectativas. Te sugerimos soluciones óptimas para sacar el máximo partidop a tu proyecto'
    },
    n4: {
      title: 'Nos mantendremos por delate de su competencia',
      details: 'Comprobaremos a quién te enfrentas cada día y te propondremos soluciones que te harán destacar de la competencia.'
    },
    n5: {
      title: 'Simplificamos tu vida',
      details: 'Le proporconaremos un panel de administración de contenido intuitivo en su sitio web. Implementaremos soluciones que automatizarán tu trabajo. Si necesita soluciones dedicadas, nuestros programadores se las proporcionarán en la forma óptima para usted.'
    },
  }
  const [datat, setDatat] = useState({
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
    infoContainer.current.style.visibility = 'visible';
    switch (number) {
      case '1':
        setDatat({
          title: data.n1.title,
          description: data.n1.details,
        })
        infoContainer.current.style.backgroundColor = '#F2AC57'
        break;
      case '2':
        setDatat({
          title: data.n2.title,
          description: data.n2.details,
        })
        infoContainer.current.style.backgroundColor = '#FF7171'
        break;
      case '3':
        setDatat({
          title: data.n3.title,
          description: data.n3.details
        })
        infoContainer.current.style.backgroundColor = '#14A38B'
        break;
      case '4':
        setDatat({
          title: data.n4.title,
          description: data.n4.details
        })
        infoContainer.current.style.backgroundColor = '#0880AE'
        break;
      case '5':
        setDatat({
          title: data.n5.title,
          description: data.n5.details
        })
        infoContainer.current.style.backgroundColor = '#2C2738'
        break;
    }
  }

  const handleDesactive = () => {
    infoContainer.current.style.visibility = 'hidden';
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '10px 0px',
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
      marginBottom: '5px'
    },
    descriptionContainer: {
      margin: '10px 0px',
      color: '#848484',
      '& h2': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px'
        }
      }
    },
    descriptionNumber: {
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
      }

    },
    infoNumber: {
      padding: '25px',
      visibility: 'hidden',
      minHeight: '300px'

    },
    infoNumberDecorate: {
      margin: '20px 0px',
      width: '95px',
      height: '7px',
      backgroundColor: 'white',
    },
    title: {
      margin: '20px 0px',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
      }
    },
    titleMaster: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
      }
    },
    bold: {
      fontWeight: 'bold'
    }
  }))

  const classes = useStyles();

  const handleColor = () => {
    number1.current.style.backgroundColor = '#F2AC57';
    number2.current.style.backgroundColor = '#FF7171';
    number3.current.style.backgroundColor = '#14A38B';
    number4.current.style.backgroundColor = '#0880AE';
    number5.current.style.backgroundColor = '#2C2738';
  }

  useEffect(() => (
    handleColor()
  ))

  return (
    <Grid container xs={12} className={classes.root} >
      <Grid item xs={12} >
        <Typography component='h2' variant='h5' className={classes.bold} >¿Estás pensando en un nuevo sitio web?</Typography>
      </Grid>
      <Grid item xs={12} className={classes.descriptionContainer} >
        <Typography component='h2' variant='h5' > Conoce 5 razones por las que debes apostar por nosotros: </Typography>
      </Grid>
      <Grid item container lg={12} xs={2} justify='space-around' className={classes.numbersContainer} >
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={() => (handleDesactive())} onMouseOver={() => (handleInfo('1'))} ref={number1} >
          <Typography component='h1' variant='h4' className={classes.bold}> 1 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={() => (handleDesactive())} onMouseOver={() => (handleInfo('2'))} ref={number2} >
          <Typography component='h1' variant='h4' className={classes.bold}> 2 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={() => (handleDesactive())} onMouseOver={() => (handleInfo('3'))} ref={number3} >
          <Typography component='h1' variant='h4' className={classes.bold}> 3 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={() => (handleDesactive())} onMouseOver={() => (handleInfo('4'))} ref={number4} >
          <Typography component='h1' variant='h4' className={classes.bold}> 4 </Typography>
        </Grid>
        <Grid item container justify='center' alignItems='center' className={classes.numberContainer} onMouseLeave={() => (handleDesactive())} onMouseOver={() => (handleInfo('5'))} ref={number5} >
          <Typography component='h1' variant='h4' className={classes.bold}> 5 </Typography>
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={10} className={classes.infoNumber} ref={infoContainer} >
        <Grid item md={12} >
          <div className={classes.infoNumberDecorate} ></div>
          <Typography className={classes.title} component='h2' variant='h4' > {datat.title} </Typography>
          <Typography component='h2' variant='h6' className={classes.descriptionNumber} > {datat.description} </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CounterInfo;