import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



import InfoVerticalDecorate from '../Components/InfoVerticalDecorate';
import InfoImage from '../Components/InfoImage';
import ImgDescription from '../Components/ImgDescription';
import PageTitle from '../Components/PageTitle';
import CarruselCompany from '../Components/CarruselCompany';
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';

import CarruselPage from '../Components/CarruselPage';
import desarrolloLogo from '../Assets/imgs/desarrollo.png';

//Imagenes
import oneCarousel from '../Assets/imgs/1soft.png';
import twoCarousel from '../Assets/imgs/2soft.png';

import angular from '../Assets/imgs/angular.png';
import react from '../Assets/imgs/react.png';
import phyton from '../Assets/imgs/phyton.png';
import windows from '../Assets/imgs/windows.png';
import v8 from '../Assets/imgs/v8.png';
import JS from '../Assets/imgs/JS.png';
import node from '../Assets/imgs/node.png';
import php from '../Assets/imgs/php.png';

import softwaredown from '../Assets/imgs/softwaredown.png';

import bd from '../Assets/imgs/bd.png';
import web from '../Assets/imgs/web.png';
import apps from '../Assets/imgs/apps.png';
import servicios from '../Assets/imgs/servicios.png'

export default function Software() {
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
            color: theme.palette.text.gray
        },
        firstOrientation: {
            flexDirection: 'column-reverse',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',

            }
        }
    }))

    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid container item className={classes.firstOrientation}>
                    <Grid container justify="center" item xs={12} md={6}>
                        <Grid item>
                            <PageTitle
                                img={desarrolloLogo}
                                title="Desarrollo"
                            />
                            <InfoVerticalDecorate
                                title='Generamos plataformas con las herramientas más novedosas del mercado'
                                details='Tenemos la solución precisa para llevar al éxito cualquier empresa o proyecto. Nuestro equipo de desarrolladores está capacitado para dar soluciones de vanguardia tecnológica que sin duda alguna optimizaran los diversos procesos operativos, creando sistemas únicos y altamente funcionales, aumentando la productividad y la eficiencia.'
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={5} className={classes.carouselBorderRadius}>
                            <CarruselPage
                                imgs={[{
                                    id: '1',
                                    cover: oneCarousel
                                },
                                {
                                    id: '2',
                                    cover: twoCarousel
                                }]}
                            />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: 20 }}>
                    <Grid container alignItems="center" item xs={12} md={2}>
                        <Typography variant="h5" align="center" className={classes.subtitle}>
                            Tecnologías
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={10} >
                        <CarruselCompany
                            imgs={[{
                                id: '1',
                                cover: angular
                            },
                            {
                                id: '2',
                                cover: react
                            },
                            {
                                id: '3',
                                cover: phyton
                            },
                            {
                                id: '4',
                                cover: v8
                            },
                            {
                                id: '5',
                                cover: JS
                            },
                            {
                                id: '6',
                                cover: node
                            },
                            {
                                id: '7',
                                cover: php
                            },
                            {
                                id: '8',
                                cover: windows
                            }
                            ]
                            }
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <ImgDescription
                        title='Nuestras soluciones'
                        description='No solo se enfocan en el desarrollo de software sino en el estudio meticuloso de los procesos que se llevan a cabo, brindando un servicio único gracias a nuestros desarrolladores y científicos expertos además de aplicar diversas metodologías de desarrollo ágil en nuestros procesos de creación.'
                        img={softwaredown}
                    />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <InfoImage
                        title='Administración de base de Datos'
                        description={['Desarrollo de interfaz de programación (A.P.I. por sus siglas en inglés)', 'Monitoreo y control de respaldo', 'Migración de base de datos', 'Actualización de versiones y análisis de compatibilidad', 'Mantenimiento y soporte a base de datos existentes']}
                        img={bd}
                    />
                    <InfoImage
                        title='Desarrollo Web'
                        description={['Aplicación web dinámicas (HTML5, CSS4 y JS Ecmascript 5)', 'Programación a nivel de servidor (Php, C, C++, C#, Python y .Net 3.5)', 'Páginas web ( Web services)', 'Implemento y soporte a servidores y sitios web existentes']}
                        img={web}
                        direction="row-reverse"
                    />
                    <InfoImage
                        title='Apps Móviles'
                        description={['Aplicaciónes móviles (iOS y Android)', 'Aplicaciones móbiles híbridas con Phonegap (iOS, Android y Windows Phone)', 'Servicios de notificaciones Push', 'Auditoría de compatibilidad, seguridad y rendimiento', 'Mantenimiento y soporte a aplicaciones móviles existentes']}
                        img={apps}
                    />
                    <InfoImage
                        title='Servicios Logísticos'
                        description={['Analisis y levantamiento de requerimientos', 'Auditoria de Software', 'Asesoría de inversión en sistemas de computo', 'Planificación de control interno', 'Toma de servicios y servidores']}
                        img={servicios}
                        direction="row-reverse"
                    />
                </Grid>
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