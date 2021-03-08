import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



import InfoVerticalDecorate from '../Components/InfoVerticalDecorate';
import InfoImage from '../Components/InfoImage';
import ImageOffsetInfo from '../Components/ImageOffsetInfo';
import DescriptiveCard from '../Components/DescriptiveCard';
import ImgDescription from '../Components/ImgDescription';
import PageTitle from '../Components/PageTitle';
import CarruselCompany from '../Components/CarruselCompany';
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
import Button1 from '../Components/Button1'
import CarruselPage from '../Components/CarruselPage';
import desarrolloLogo from '../Assets/imgs/desarrollo.png';

//Imagenes
import oneCarousel from '../Assets/imgs/iotcar1.png';
import twoCarousel from '../Assets/imgs/2soft.png';

import lutron from '../Assets/imgs/lutron.png';
import samsung from '../Assets/imgs/samsung.png';
import somfy from '../Assets/imgs/somfy.png';
import nest from '../Assets/imgs/nest.png';
import amazon from '../Assets/imgs/amazon.png';
import google from '../Assets/imgs/google.png';
import sonos from '../Assets/imgs/sonos.png';
import yamaha from '../Assets/imgs/ymaha.png';
import yale from '../Assets/imgs/yale.png';
import honeywell from '../Assets/imgs/honeywell.png';
import zkteco from '../Assets/imgs/zkteco.png';
import citylocks from '../Assets/imgs/citylocks.png';
import first from '../Assets/imgs/first.png';
import fire from '../Assets/imgs/fire.png';
import arduino from '../Assets/imgs/arduino.png';
import rasp from '../Assets/imgs/rasp.png';

import iotdown from '../Assets/imgs/iotdown.png';
import iot1 from '../Assets/imgs/iot1.png';
import casa from '../Assets/imgs/casa.png';
import instalacion from '../Assets/imgs/instalacion.png';
import seguridad from '../Assets/imgs/seguridad.png';
import multimedia from '../Assets/imgs/multimedia.png';
import accesos from '../Assets/imgs/accesos.png';
import persianas from '../Assets/imgs/persianas.png';


import homeForm from '../Assets/imgs/iotform.png'
import iot11 from '../Assets/imgs/iot11.png'
import iot22 from '../Assets/imgs/iot2.png'

import '../scss/Home.scss';

export default function IOT() {
    const useStyles = makeStyles((theme) => ({
        carouselBorderRadius: {
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        },
        subtitle: {
            fontWeight: 'bold',
            color: theme.palette.text.gray
        },
        gray: {
            color: theme.palette.text.gray,
            marginTop: 20,
            fontWeight: 500
        },
        firstOrientation: {
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',

            }
        },
        pageTitle: {
            paddingLeft: 0,
            [theme.breakpoints.up('md')]: {
                paddingLeft: 40

            }
        },
        title: {
            fontWeight: 'bold',
            borderBottom: `6px solid ${theme.palette.primary.main}`,
            paddingBottom: 4,

        },
        title2: {
            fontWeight: 'bold',
            borderLeft: `6px solid ${theme.palette.primary.main}`,
            paddingLeft: 8,

        },
    }))

    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid container item className={classes.firstOrientation}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={5} className={classes.carouselBorderRadius}>
                            <CarruselPage
                                imgs={[{
                                    id: '1',
                                    cover: oneCarousel
                                },
                                ]}
                            />
                        </Paper>
                    </Grid>
                    <Grid container justify="center" item xs={12} md={6}>
                        <Grid item className={classes.pageTitle}>
                            <PageTitle
                                img={desarrolloLogo}
                                title="IoT"
                            />
                            <InfoVerticalDecorate
                                title='Te damos las soluciones para automatizar tu espacio y hacerlo inteligente'
                                details='Conoce el mejor Sistema de  Automatización que se adecue a tus necesidades.'
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: 40 }}>
                    <Grid container alignItems="center" item xs={12} md={2}>
                        <Typography variant="h5" align="center" className={classes.subtitle}>
                            Socios Tecnológicos
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={10} >
                        <CarruselCompany
                            imgs={[{
                                id: '1',
                                cover: lutron
                            },
                            {
                                id: '2',
                                cover: samsung
                            },
                            {
                                id: '3',
                                cover: somfy
                            },
                            {
                                id: '4',
                                cover: nest
                            },
                            {
                                id: '5',
                                cover: amazon
                            },
                            {
                                id: '6',
                                cover: google
                            },
                            {
                                id: '7',
                                cover: sonos
                            },
                            {
                                id: '8',
                                cover: yamaha
                            },
                            {
                                id: '9',
                                cover: yale
                            },
                            {
                                id: '10',
                                cover: honeywell
                            }, {

                                id: '11',
                                cover: zkteco
                            },
                            {
                                id: '12',
                                cover: citylocks
                            },
                            {
                                id: '13',
                                cover: first
                            },
                            {
                                id: '14',
                                cover: fire

                            },
                            {
                                id: '15',
                                cover: arduino

                            },
                            {
                                id: '16',
                                cover: rasp

                            },
                            ]
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container item style={{ marginTop: 40 }}>
                    <Grid item xs={12} md={4} style={{ marginTop: 20, paddingRight: 30 }}>
                        <Typography variant="h4" component="span" className={classes.title}>El objetivo</Typography>
                        <Typography variant="body" component="p" className={classes.gray}>
                            Crear el diseño de un sistema basado en la tecnología IP, automatización de audio, luz y video por medio de controladores de voz y dispositivos en red.
                        </Typography>
                        <Typography variant="body" component="p" className={classes.gray}>
                            Los cuales le permitira al usuario el control inalámbrico y a distancia de su espacio.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} style={{ marginTop: 20 }}>
                        <ImgDescription
                            title='Mejorando tu estilo de vida'
                            description='Llevamos muchos años hablando de cómo será la casa del futuro. Pero poco a poco ese hogar se va convirtiendo en realidad. Desde el móvil podemos controlar nuestra vivienda.'
                            img={iot1}
                        />
                    </Grid>
                </Grid>
                <Grid container item style={{ marginTop: 40 }}>
                    <Grid item xs={12} md={5} style={{ marginTop: 60, paddingRight: 30 }}>
                        <Typography variant="h4" component="span" className={classes.title}>¿Qué puedes automatizar en tu casa?</Typography>
                        <Typography variant="body" component="p" className={classes.gray} style={{ marginTop: 40 }}>
                            puedes controlar varios sistemas que interactúan en ella,
                            por ejemplo, audio, video, iluminación, seguridad, temperatura, alarma.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} style={{ marginTop: 20 }}>
                        <img src={iotdown} alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
                <Grid container item >
                    <Grid item xs={12} md={8} style={{ marginTop: 40 }}>
                        <img src={casa} alt="" style={{ width: '100%' }} />
                    </Grid>
                    <Grid container alignItems="center" item xs={12} md={4} style={{ marginTop: 20 }}>
                        <Typography variant="h4" className={classes.title2} style={{ marginLeft: 30 }}>Descubra las posibilidades y ventajas de disponer de un control y seguridad ilimitado</Typography>
                    </Grid>
                </Grid>
                <Grid container justify="space-around" item xs={12} style={{ marginTop: 20 }}>
                    <Grid item xs={10} md={2} style={{ margin: '1em 0' }}>
                        <DescriptiveCard
                            logo={instalacion}
                            title="Instalación sin obras"
                            description="La instalación se realiza sin obras.  adaptándonos a la vivienda ya construida"
                        />
                    </Grid>
                    <Grid item xs={10} md={2} style={{ margin: '1em 0' }}>
                        <DescriptiveCard
                            logo={seguridad}
                            title="Seguridad y videovigilancia"
                            description="La instalación se realiza sin obras.  adaptándonos a la vivienda ya construida"
                        />
                    </Grid>
                    <Grid item xs={10} md={2} style={{ margin: '1em 0' }}>
                        <DescriptiveCard
                            logo={multimedia}
                            title="Multimedia y control por voz"
                            description="Envíe los contenidos multimedia desde su móvil a televisores, altavoces y proyectores. Controle dispositivos por voz con Alexa y Google home."
                        />
                    </Grid>
                    <Grid item xs={10} md={2} style={{ margin: '1em 0' }}>
                        <DescriptiveCard
                            logo={accesos}
                            title="Control de accesos"
                            description="Puede ver y hablar a través del móvil con la persona que llama a su videoportero. Puede abrir remotamente cualquier puerta de paso o de garaje."
                        />
                    </Grid>
                    <Grid item xs={10} md={2} style={{ margin: '1em 0' }}>
                        <DescriptiveCard
                            logo={persianas}
                            title="Control de persianas"
                            description="el uso de persianas es vital Abrirlas y cerrarlas es posible a través de un dispositivo que envía señales a los motores debidamente instalados en éstas."
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-around" item xs={12} style={{ marginTop: 60 }}>
                    <Grid item xs={12} md={5} style={{ margin: '1em 0' }}>
                        <ImageOffsetInfo
                            title='Ahorro enegético'
                            description='El sistema dómotica es capaz de adecuar los gastos de la vivienda al consumo exacto que va a tener, produciendo un ahorro en las facturas de mas de 20% de media por las familias'
                            img={iot11}
                        />
                    </Grid>
                    <Grid item xs={12} md={5} style={{ margin: '1em 0' }}>
                        <ImageOffsetInfo
                            title='Automatización'
                            description='Configure reglas avanzadas para controlar dispositivos y darle vida a su hogar'
                            img={iot22}
                        />
                    </Grid>
                </Grid>
                <section className="content1 form-container">

                    <Grid container className={classes.formGrid}>
                        <Grid item xs={12} md={6} style={{ margin: "3em 0" }}>
                            <Typography variant="h6" >Nos encantaría saber de usted</Typography>
                            <Typography variant="body1" className={classes.gray}>¿Buscas buenas soluciones en tu negocio? Deberíamos tener una conversación.</Typography>
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
                </section>
            </Grid>

            {/* <Grid xs={12} >
                <TitleEnterpriseCarrusel
                    title='Tecnologia'
                    imgs={[{
                        id: '1',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '2',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '3',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '4',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '5',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '6',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '7',
                        cover: informaticaForenceImg
                    },
                    {
                        id: '8',
                        cover: informaticaForenceImg
                    }
                    ]
                    }
                />
            </Grid>
            
            <Grid xs={12} >
                
            </Grid>
            <Grid xs={5} >
                <ImageOffsetInfo
                    title='Hola mundo'
                    description='hola dfefsf  sfs ds  asfgasdgsdgsdg sdgsdgsdg sdgsdgsdgsd sdgsdgsdgsd  sdgsdg sdgsdg'
                    img={informaticaForenceImg}
                />
            </Grid> */}
        </Container >
    )
}