import React, { Fragment } from 'react';

// Components 
import Button1 from '../Components/Button1';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FlippingCard from '../components2/FlippingCard/FlippingCard';
import PageVideo from '../components2/PageVideo/PageVideo';
import HeroPath from '../components2/HeroPath/HeroPath';
import CountUpNumber from '../components2/CountUpNumber/CountUpNumber';
import SwiperFree from '../components2/SwiperFree/SwiperFree';
import Footer from '../components2/Footer/Footer';
import TitleWhitDecorate from '../Components/TitleWhitDecorate';
import homeForm from '../Assets/imgs/homeform.png'
// CSS 
import { makeStyles } from '@material-ui/core/styles';
import '../scss/Home.scss';

// Assets
import firstHome from '../Assets/images/first-home.png';
import queHacemos from '../Assets/images/que-hacemos.png';
import flippingImageMarketing from '../Assets/images/flipping-marketing.png';
import flippingImageSistemas from '../Assets/images/flipping-sistemas.png';
import flippingImageDesarrollo from '../Assets/images/flipping-desarrollo.png';
import flippingImageDomotica from '../Assets/images/flipping-domotica.png';
import flippingImageBackMarketing from '../Assets/images/flipping-marketing-back.png';
import flippingImageBackSistemas from '../Assets/images/flipping-sistemas-back.png';
import flippingImageBackDesarrollo from '../Assets/images/flipping-desarrollo-back.png';
import flippingImageBackDomotica from '../Assets/images/flipping-domitica-back.png';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
    gray: {
        color: theme.palette.text.gray,
        // padding: '0 3em'
    },
    gray2: {
        color: theme.palette.text.gray,
        fontWeight: 500

        // padding: '0 10em'
    },
    title: {
        fontWeight: 'bold',
        borderLeft: `solid 7px ${theme.palette.primary.main}`,
        paddingLeft: 10,
        marginBottom: 15
    },
    title2: {
        fontWeight: 'bold',
        borderBottom: `solid 10px ${theme.palette.primary.main}`,
        paddingLeft: 10,
        marginBottom: 15
    },
    formGrid: {
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',

        }
    },
    medium: {
        fontWeight: 500
    },
    bold: {
        fontWeight: 'bold'
    }
}));

export default function Home() {

    const classes = useStyles();

    return (
        <Fragment>
            <section id="parallax1" className="parallax-slide">
                <PageVideo />
            </section>
            <section className="content1 content-slide">
                <HeroPath />
                <section className="content1 content-slide">
                    <article className="services">
                        <TitleWhitDecorate title='Servicios Integrales' />
                        <Container maxWidth="xl">
                            <Typography variant="body2" className={classes.gray}>Los clientes vienen a nosotros por un trabajo que ayuda a que sus negocios sean más exitosos, y por creatividad, estrategia y tecnologia de primer nivel que ayudan a sus organizaciones a superar sus objetivos.</Typography>
                        </Container>
                    </article>
                    <article className="grid-bg">
                        <Container maxWidth="md">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <FlippingCard
                                        flippingImage={flippingImageMarketing}
                                        flippingImageAlt="Marketing"
                                        flippingImageBack={flippingImageBackMarketing}
                                        flippingTitle="Marketing Digital"
                                        flippingDescription="Creemos que las marcas de hoy deben ser auténticas y accesibles para ser escuchadas. Combinamos esta comprensión con nuestro talento para las tendencias y tecnologías digitales"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FlippingCard
                                        flippingImage={flippingImageSistemas}
                                        flippingImageAlt="Sistemas"
                                        flippingImageBack={flippingImageBackSistemas}
                                        flippingTitle="Sistemas"
                                        flippingDescription="Creemos que las marcas de hoy deben ser auténticas y accesibles para ser escuchadas. Combinamos esta comprensión con nuestro talento para las tendencias y tecnologías digitales"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FlippingCard
                                        flippingImage={flippingImageDesarrollo}
                                        flippingImageAlt="Desarrollo"
                                        flippingImageBack={flippingImageBackDesarrollo}
                                        flippingTitle="Desarrollo"
                                        flippingDescription="Te ofrecemos la solución que represente el mejor costo beneficio para tu negocio.  Por ello, desarrollamos cada solución con base a las necesidades de nuestros clientes.."
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FlippingCard
                                        flippingImage={flippingImageDomotica}
                                        flippingImageAlt="Domotica"
                                        flippingImageBack={flippingImageBackDomotica}
                                        flippingTitle="Domótica"
                                        flippingDescription="Llevamos muchos años hablando de cómo será la casa del futuro. Pero poco a poco ese hogar se va convirtiendo en realidad. Desde el móvil podemos controlar nuestra vivienda. ."
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                    </article>
                </section>
                <Container maxWidth="lg">
                    <Grid container className="first-home-info">
                        <Grid item xs={12} md={6}>
                            <div style={{ marginTop: 15 }}>
                                <Typography variant="h3" className={classes.title}> Aumente la productividad y recupere su tiempo.</Typography>
                                <Typography variant="body1" className={classes.medium}>Adoptamos un enfoque adecuado para la selección de la  Plataforma, asegurando que las necesidades comerciales del cliente se atiendan como una prioridad.</Typography>
                                <Button1
                                    text1="Quiero"
                                    text2="saber más"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={firstHome} alt="first banner home" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="content1 content-container">



                <Container maxWidth="lg">
                    <Grid container >
                        <Grid container alignItems="center" item xs={12} md={6}>
                            <Typography variant="h4" className={classes.title}> No vendemos soluciones, producimos resultados eficientes.</Typography>
                            {/* <TitleWhitDecorate title='No vendemos soluciones, producimos resultados eficientes' /> */}
                        </Grid>
                        <Grid container item xs={12} md={6}>
                            <Grid item xs={6} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={100}
                                    suffix="%"
                                    description="Eficiencia" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={200}
                                    suffix=""
                                    description="Proyectos Terminados" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={"4000"}
                                    suffix=""
                                    description="Horas Trabajadas" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={300}
                                    suffix="+"
                                    description="Soluciones de Problemas" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={873}
                                    suffix="M+"
                                    description="Ideas por Desarrollar" />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <CountUpNumber
                                    className="count"
                                    end={21}
                                    suffix=""
                                    description="Clientes Satisfechos" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </section>
            <section className="content1 form-container">

                <Container maxWidth="lg">
                    <Grid container >

                        <Grid item xs={12} md={6} >
                            <Typography variant="h4" className={classes.title}>¿QUÉ HACEMOS?</Typography>
                            <Typography className={classes.gray2} paragraph>El equipo de <span className="bold-span">SOMA</span> está impulsado por la creencia de que el trabajo integral puede cambiar el mundo. Venimos de todos los ámbitos de la vida para crear un trabajo innovador con resultados probados. Con un sólido razonamiento detrás de nuestro conocimiento para cumplir con los objetivos comerciales y el desarrollo de las empresas.</Typography>
                            <Typography className={classes.gray2}>Trabajamos juntos, intercambiamos ideas y aportamos nuestras propias perspectivas a la mezcla. Apreciando el valor de las nuevas perspectivas, siempre estamos abiertos a nuevos talentos.</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} className="que-hacemos">
                            <img src={queHacemos} alt="Qué hacemos banner" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="content1 form-container">
                <Container maxWidth="lg">

                    <Grid container className={classes.formGrid}>
                        <Grid item xs={12} md={6} style={{ margin: "3em 0" }}>
                            <Typography variant="h6" className={classes.bold}>Nos encantaría saber de usted</Typography>
                            <Typography variant="body1" className={classes.gray2}>¿Buscas buenas soluciones en tu negocio? Deberíamos tener una conversación.</Typography>
                            <form action="" className="home-form" style={{ margin: "1em 0" }}>
                                <div>
                                    <label htmlFor="" style={{ width: "43%" }}> Nombre *
                                <input type="text" style={{ width: "100%" }} />
                                    </label>
                                    <label htmlFor="" style={{ width: "43%" }}> Email *
                                <input type="text" style={{ width: "100%" }} />
                                    </label>
                                </div>
                                <label htmlFor=""> Mensaje *
                            <textarea name="" id="" cols="30" rows="10" style={{ width: "90%" }}></textarea>
                                </label>
                            </form>
                            <Button1
                                text1="Enviar"
                                text2="mensaje"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={homeForm} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </ Container>

            </section>
        </Fragment >
    )
}
