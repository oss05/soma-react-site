import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import headerVideo from '../Assets/Videos/Home.mp4';

export default function Home() {

    const useStyles = makeStyles((theme) => ({
        title: {
            fontWeight: 'bold'
        },
        parallaxSlide: {
            height: '100vh',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        },
        video: {
            width: '100%',
        },
        containerWrap: {
            filter: 'drop-shadow(0 -6mm 0mm #acacac57)',
            width: '100%',
            height: 'auto',
            background: '#f8f8f8'
        },
        masterContainer: {
            width: '100%',
            backgroundColor: '#f8f8f8',
            clipPath: 'polygon(50% 0%, 85% 17%, 100% 17%, 100% 100%, 0 100%, 0% 60%, 0 19%)',
            position: 'absolute',
            bottom: 0
        },
        container: {
            borderBottom: 'solid 2px gray',
            paddingBottom: '3em'
        },
        triangle: {
            width: '100%',
            height: 75
        }
    }));

    const classes = useStyles();

    return (
        <Box>
            <Grid container className={classes.parallaxSlide}>
                <video autoPlay loop mute="true" className={classes.video}>
                    <source src={headerVideo} type="video/mp4" />
                </video>
            </Grid>
            <Grid container className={classes.containerWrap}>
                <Grid item className={classes.masterContainer}>
                    <Container maxWidth="md" className={classes.container}>
                        <Grid item className={classes.triangle}></Grid>
                        <Grid item>
                            <Typography component="h1" variant="h3" align="center" className={classes.title}> Somos una de las empresas de más efectivas</Typography>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}
