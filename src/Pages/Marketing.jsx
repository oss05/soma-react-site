import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



import InfoVerticalDecorate from '../Components/InfoVerticalDecorate';
import InfoImage from '../Components/InfoImage';
import ImgDescription from '../Components/ImgDescription';
import PageTitle from '../Components/PageTitle';
import CarruselCompany from '../Components/CarruselCompany';
import CounterInfo from '../Components/CounterInfo';
import SimpleInfoCard from '../Components/SimpleInfoCard';
import CarruselBgImgUpInfo from '../Components/CarruselBgImgUpInfo';

import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';

import CarruselPage from '../Components/CarruselPage';
import mktLogo from '../Assets/imgs/mkt.png';

//Imagenes
import mkt from '../Assets/imgs/mktBanner.png';

import angular from '../Assets/imgs/angular.png';
import react from '../Assets/imgs/react.png';
import phyton from '../Assets/imgs/phyton.png';
import windows from '../Assets/imgs/windows.png';
import v8 from '../Assets/imgs/v8.png';
import JS from '../Assets/imgs/JS.png';
import node from '../Assets/imgs/node.png';
import php from '../Assets/imgs/php.png';

import mtdown from '../Assets/imgs/mtdown.png';
import website from '../Assets/imgs/website.png';

import bd from '../Assets/imgs/bd.png';
import web from '../Assets/imgs/web.png';
import apps from '../Assets/imgs/apps.png';
import servicios from '../Assets/imgs/servicios.png'

import carrusel1Img1 from '../Assets/imgs/mc1-1.png'
import carrusel1Img2 from '../Assets/imgs/mc1-2.png'
import carrusel1Img3 from '../Assets/imgs/mc1-3.png'
import carrusel1Img4 from '../Assets/imgs/mc1-4.png'
import carrusel1Img5 from '../Assets/imgs/mc1-5.png'

import chatbot from '../Assets/imgs/chatbot.png'
import tendencia from '../Assets/imgs/tendencia.png'
import www from '../Assets/imgs/www.png'


export default function Marketing() {
    const useStyles = makeStyles((theme) => ({
        carouselBorderRadius: {
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        },
        subtitle: {
            fontWeight: 'bold',
            color: theme.palette.text.gray
        },
        title: {
            fontWeight: 'bold',
            borderBottom: `6px solid ${theme.palette.primary.main}`,
            paddingBottom: 4,

        },
        gray: {
            color: theme.palette.text.gray
        },
        firstOrientation: {
            flexDirection: 'column-reverse',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',

            }
        },
        bodytext: {
            marginTop: 20
        },
        subtext: {
            marginTop: 20,
            fontWeight: 'bold'
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
                                img={mktLogo}
                                title="Marketing Digital"
                            />
                            <InfoVerticalDecorate
                                title='Creemos que las marcas de hoy deben ser auténticas y accesibles para ser escuchadas.'
                                details='Cada empresa tiene sus propias particularidades y necesidades, y hacemos todo lo posible para ayudar a nuestros clientes a resaltar sus ventajas de manera efectiva y obtener una ventaja sobre la competencia.'
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={mkt} alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid >
                <Grid container item xs={12} style={{ marginTop: 20 }}>
                    <Grid item xs={12} md={4} style={{ borderRight: 'solid 1px #DADADA' }}>
                        <SimpleInfoCard
                            title="WWW:"
                            description={[ 
                              {
                                id: '1',
                                data: 'Posicionamiento'
                              },
                              {
                                id: '2',
                                data: 'Auditorías SEO'
                              },
                              {
                                id: '3',
                                data: 'Optimizaciones SEO'
                              }, 
                              {
                                id: '4',
                                data: 'Campañas de Google Ads'
                              }, 
                              {
                                id: '5',
                                data: 'Redacción'
                              }, 
                              {
                                id: '6',
                                data: 'Marketing de contenidos'
                              },   
                            ]}
                            logo={www}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} style={{ borderRight: 'solid 1px #DADADA' }}>
                        <SimpleInfoCard
                            title="SEO y Google Ads:"
                            description={[ 
                              {
                                id: '1',
                                data: 'Sitios web'
                              },
                              {
                                id: '2',
                                data: 'Tiendas de Internet'
                              },
                              {
                                id: '3',
                                data: 'Portales'
                              }, 
                              {
                                id: '4',
                                data: 'Aplicaciones dedicadas'
                              }, 
                              {
                                id: '5',
                                data: 'Auditorías de UX / UI'
                              }, 
                              {
                                id: '6',
                                data: 'Optimización de sitios web'
                              },   
                            ]}
                            logo={tendencia}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SimpleInfoCard
                            title="Redes sociales:"
                            description={[ 
                              {
                                id: '1',
                                data: 'Facebook'
                              },
                              {
                                id: '2',
                                data: 'Instagram'
                              },
                              {
                                id: '3',
                                data: 'LinkedIn'
                              }, 
                              {
                                id: '4',
                                data: 'Publicidad en redes sociales'
                              }, 
                              {
                                id: '5',
                                data: 'Chatbots'
                              }, 
                            ]}
                            logo={chatbot}
                        />
                    </Grid>

                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                    <Typography variant="h4" component="span" className={classes.title}>¿Porque nosotros?</Typography>
                    <CarruselBgImgUpInfo
                        data={[{
                            id: '1',
                            logo: carrusel1Img1,
                            title: 'Nos mantendremos por delante de su competencia',
                            description: 'Comprobaremos a quién te enfrentas cada día y te propondremos soluciones que te harán destacar de la competencia.'
                        },
                        {
                            id: '2',
                            logo: carrusel1Img2,
                            title: 'Simplificamos tu vida',
                            description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo. '
                        },
                        {
                            id: '3',
                            logo: carrusel1Img3,
                            title: 'Garantizamos una comunicación eficiente',
                            description: 'A pesar de los estereotipos relacionados con los "especialistas en TI",garantizamos una comunicación eficiente y comprensible'
                        },
                        {
                            id: '4',
                            logo: carrusel1Img4,
                            title: 'Analizamos tus objetivos comerciales',
                            description: 'Antes de comenzar a trabajar en el diseño de un sitio web, queremos comprender su negocio y los objetivos que se proponga, necesitamos conocer a sus clientes.'
                        },
                        {
                            id: '5',
                            logo: carrusel1Img5,
                            title: 'Nos enfocamos en tus clientes',
                            description: 'Llamaremos su atención y les animamos a que se pongan en contacto con usted, ajustando el sitio web a su conveniencia, necesidades y expectativas.'
                        },
                        ]
                        }
                    />
                </Grid>
                <Grid container item xs={12} justify="space-around">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="span" className={classes.title}>Qué hacemos</Typography> <br /> <br /><br />
                        <Typography variant="body" className={classes.bodytext}>Puede confiarnos la gestión integral de su actividad en Internet. Obtendrá un socio confiable y comprometido, gracias al cual podrá concentrarse en su negocio. Estaremos encantados de convertirnos en su departamento de e-marketing.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={mtdown} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} >
                    <Grid item xs={12} md={6}>
                        <img src={website} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" component="span" className={classes.title}>Sitios web</Typography>
                        <Typography variant="h6" className={classes.subtext}>¿Quiere un sitio web que sea su mejor comerciante? </Typography>
                        <Typography variant="body" >Permítanos enfocarlo de esta manera: deje que cause una excelente primera impresión en sus clientes. Presentará sus fortalezas de manera ejemplar y presentará su oferta de manera atractiva. Que fomente el contacto y facilítelo incluso para los que "no están en Internet". Este será el sitio web que prepararemos para usted, sabemos cómo hacerlo.</Typography>
                        <CounterInfo />
                    </Grid>
                </Grid>
            </Grid >

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