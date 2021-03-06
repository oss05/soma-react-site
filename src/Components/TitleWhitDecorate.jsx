import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const TitleWhitDecorate = ({ title }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 'auto',
      margin: '2em 0'
    },
    title: {
      width: 'auto',
      fontWeight: 'bold',
      borderBottom: `8px solid ${theme.palette.primary.main}`,
      paddingBottom: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: '35px'
      }
    },
  }))

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} component='span' variant='h4' >
        {title}
      </Typography>
    </Box>
  )
}

export default TitleWhitDecorate;