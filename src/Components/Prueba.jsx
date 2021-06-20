import React from 'react'
import {Box, Grid, Container} from '@material-ui/core';

const Prueba = () => {
  return (
    <>
      <Box >
        <Grid container style={ { border: 'solid 1px blue', height: 500 } } 
        direction='row' 
        alignItems='center'
        justify='space-between'
        >
          <Grid item direction='column' container  xs={12} style={ { border: 'solid 1px red', width: 50, height: 100 } } >
            <Grid item  xs={5} style={ { border: 'solid 1px green', height: 50 } }>
            </Grid>
            <Grid item  xs={5} style={ { border: 'solid 1px green', height: 50 } }>
            </Grid>
          </Grid>
          <Grid item xs={6} style={ { border: 'solid 1px red', width: 50, height: 50 } } ></Grid>
          <Grid item xs={12} style={ { border: 'solid 1px red', width: 50, height: 50 } } ></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Prueba;