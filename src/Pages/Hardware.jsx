import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InfoHoverCard from '../Components/InfoHoverCard';
import SimpleInfoCard from '../Components/SimpleInfoCard';
import RadiusImgInfoCard from '../Components/RadiusImgInfoCard';
import BgImgUpInfo from '../Components/BgImgUpInfo';
import SistemsQuadInfo from '../Components/SistemsQuadInfo';
import TitleWhitDecorate from '../Components/TitleWhitDecorate';
import AreaDescription from '../Components/AreaDescription';
import CounterInfo from '../Components/CounterInfo';
import Footer from '../Components/Footer';
import InfoVerticalDecorate from '../Components/InfoVerticalDecorate';
import ImageInfo from '../Components/ImageInfo';
import InfoImage from '../Components/InfoImage';
import TitleEnterpriseCarrusel from '../Components/TitleEnterpriseCarrusel';
import DescriptiveCard from '../Components/DescriptiveCard';
import ImageOffsetInfo from '../Components/ImageOffsetInfo';
import ImgDescription from '../Components/ImgDescription';
import PageTitle from '../Components/PageTitle';
import Prueba from '../Components/Prueba';
import CarruselCompany from '../Components/CarruselCompany';
import CarruselBgImgUpInfo from '../Components/CarruselBgImgUpInfo';
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
import informaticaForenceImgLogo from '../Assets/imgs/informaticaForenceCardLogo.png';
import cableadoEstructurado from '../Assets/imgs/cableadoEstructurado.png';
import CarruselPage from '../Components/CarruselPage';
import sistemasLogo from '../Assets/imgs/sistemas_logo.png';
import Button1 from '../Components/Button1'
//Imagenes
import soporte from '../Assets/imgs/soporte_tecnico.png';
import seguridad from '../Assets/imgs/seguridad_administrada.png';
import nube from '../Assets/imgs/servicios_nube.png';
import comunicaciones from '../Assets/imgs/comunicaciones_unificadas.png';
import respaldos from '../Assets/imgs/respaldos.png';
import infra from '../Assets/imgs/administracion_infraestructura.png';
import telefonia from '../Assets/imgs/telefonia.png';
import correo from '../Assets/imgs/correo.png';
import procesos from '../Assets/imgs/creacion_de_procesos.png';
import aspel from '../Assets/imgs/soporte_aspel.png';

import soporteLogo from '../Assets/imgs/soporte_logo.png';
import seguridadLogo from '../Assets/imgs/seguridad_logo.png';
import nubeLogo from '../Assets/imgs/nube_logo.png';
import comunicacionesLogo from '../Assets/imgs/comunicaciones_logo.png';
import respaldosLogo from '../Assets/imgs/respaldos_logo.png';
import infraLogo from '../Assets/imgs/infra_logo.png';
import telefoniaLogo from '../Assets/imgs/telefonia_logo.png';
import correoLogo from '../Assets/imgs/correo_logo.png';
import procesosLogo from '../Assets/imgs/procesos_logo.png';
import aspelLogo from '../Assets/imgs/aspel_logo.png';

import oneCarousel from '../Assets/imgs/molecula/1.png';
import twoCarousel from '../Assets/imgs/molecula/2.png';
import threeCarousel from '../Assets/imgs/molecula/3.png';
import fourCarousel from '../Assets/imgs/molecula/4.png';

import dell from '../Assets/imgs/dell.png';
import hp from '../Assets/imgs/hp.png';
import lenovo from '../Assets/imgs/lenovo.png';
import windows from '../Assets/imgs/windows.png';
import office from '../Assets/imgs/office.png';
import apple from '../Assets/imgs/apple.png';
import adobe from '../Assets/imgs/adobe.png';
import kaspersky from '../Assets/imgs/kaspersky.png';
import symantec from '../Assets/imgs/sysmantec.png';
import samsung from '../Assets/imgs/samsung.png';
import fortinet from '../Assets/imgs/fortinet.png';
import lanix from '../Assets/imgs/lanix.png';

import hardwaredown from '../Assets/imgs/hardware_inferior.png';

import belden from '../Assets/imgs/belden.png';
import zkteco from '../Assets/imgs/zkteco.png';
import ubiquiti from '../Assets/imgs/ubiquiti.png';
import hikvision from '../Assets/imgs/hikvision.png';
import suprema from '../Assets/imgs/suprema.png';
import access from '../Assets/imgs/access.png';
import came from '../Assets/imgs/came.png';
import surefi from '../Assets/imgs/surefi.png';
import cyberpower from '../Assets/imgs/cyberpower.png';
import alvarado from '../Assets/imgs/alvarado.png';
import smartbitt from '../Assets/imgs/smartbitt.png';
import smart from '../Assets/imgs/smart.png';
import apc from '../Assets/imgs/apc.png';
import isb from '../Assets/imgs/isb.png';

import cableado from '../Assets/imgs/cableado.png';
import reubicacion from '../Assets/imgs/reubicacion.png';
import controles from '../Assets/imgs/controles.png';
import video from '../Assets/imgs/video.png';
import red from '../Assets/imgs/red.png';
import cableadoe from '../Assets/imgs/cableadoe.png';
import cctv from '../Assets/imgs/cctv.png';
import arrendamiento from '../Assets/imgs/arrendamiento.png';
import homeForm from '../Assets/imgs/sistemasform.png'

import '../scss/Home.scss';


export default function Hardware() {
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
            fontWeight: 500
        },
        firstOrientation: {
            flexDirection: 'column-reverse',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',

            }
        },
        formGrid: {
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
                                img={sistemasLogo}
                                title="Ingenieria en Sistemas"
                            />
                            <InfoVerticalDecorate
                                title='El principal compromiso es ofrecer consultoria tecnológica profesional'
                                details='Nuestro equipo se encuentra capacitado para dar soporte técnico a usuarios de manera remota o presencial, en las distintas plataformas en equipos de cómputo (Microsoft Windows, MacOS, GNU / Linux) así como también a dispositivos móviles (Android, iOS)'
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
                                },
                                {
                                    id: '3',
                                    cover: threeCarousel
                                },
                                {
                                    id: '4',
                                    cover: fourCarousel
                                }]}
                            />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: 40 }}>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h5" align="center" className={classes.subtitle}>
                            Socios Tecnológicos
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={10} >
                        <CarruselCompany
                            imgs={[{
                                id: '1',
                                cover: dell
                            },
                            {
                                id: '2',
                                cover: hp
                            },
                            {
                                id: '3',
                                cover: lenovo
                            },
                            {
                                id: '4',
                                cover: windows
                            },
                            {
                                id: '5',
                                cover: office
                            },
                            {
                                id: '6',
                                cover: apple
                            },
                            {
                                id: '7',
                                cover: adobe
                            },
                            {
                                id: '8',
                                cover: kaspersky
                            },
                            {
                                id: '9',
                                cover: symantec
                            }, {
                                id: '10',
                                cover: samsung
                            }, {
                                id: '11',
                                cover: fortinet
                            }, {
                                id: '12',
                                cover: lanix
                            },
                            ]
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TitleWhitDecorate title='Nuestros Servicios' />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={informaticaForenceImg}
                            logo={informaticaForenceImgLogo}
                            title='Informatica Forense'
                            description='Brindamos soluciones dedicadas a la Seguridad de la información y Peritaje Informático Forense ofreciendo alternativas preventivas y correctivas para salvaguarda las propiedades digitales y la información valiosa de su negocio.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={soporte}
                            logo={soporteLogo}
                            title='Soporte Técnico'
                            description='Servicios en sitio y remoto a sus equipos de cómputo y apoyo a sus usuarios.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={seguridad}
                            logo={seguridadLogo}
                            title='Seguridad Administrada'
                            description='Usamos las mejores herramientas para mantener la seguridad e integridad de la información de nuestros clientes, implementando metodologías para la protección de datos (DRP, implementación de políticas, respaldos automáticos, borrado seguro de la información, etc.)'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={nube}
                            logo={nubeLogo}
                            title='Servicios en la Nube'
                            description='Flexibilidad y alta eficiencia en tu negocio optimizando costos para crecer a tu propio ritmo.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={comunicaciones}
                            logo={comunicacionesLogo}
                            title='Comunicaciones Unificadas'
                            description='Integración de equipos altamente productivos para facilitar la comunicación segura, confiable y totalmente dispobible para cada uno de los colaboradores.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={respaldos}
                            logo={respaldosLogo}
                            title='Sistemas de respaldos de Información'
                            description='Solución de Resguardo de Información automatizado  bajo estandar de políticas.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={infra}
                            logo={infraLogo}
                            title='Administración de Infraestructura'
                            description='Es un servicios basado en las mejores prácticas en IT que nos permite operar, proporcionar soporte y mantenimiento proactivo a la infraestructura de nuestros clientes. '
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={telefonia}
                            logo={telefoniaLogo}
                            title='Telefonía IP'
                            description='Actualización de Tecnológia a costos accesibles logrando reducción de costos en sus servicios de telefonicos.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={correo}
                            logo={correoLogo}
                            title='Correo Electrónico'
                            description='Como Partner de los  principales proveedores de servicios de Correo electrónico SOMA cuenta con un abanico de posibilidades de soluciones de comunicación escrita por este medio.'
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={procesos}
                            logo={procesosLogo}
                            title='Creación de Procesos  en IT'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InfoHoverCard
                            img={aspel}
                            logo={aspelLogo}
                            title='Soporte Aspel / Compac'
                            description='Contamos con personal altamente capacitado para dar soporte de manera técnica (no de operación) para sistemas Aspel y Contpqa, realizar migraciones de sistemas a nuevos dispositivos e implementación de los mismos.'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 20 }}>

                    <AreaDescription
                        img={hardwaredown}
                    >
                        <Grid container item >
                            <TitleWhitDecorate
                                title='Servicios Infraestructura'
                            />
                        </Grid>
                        <Typography className={classes.gray}>
                            Analiza la vulnerabilidades de red, equipos físicos y brechas en seguridad informática así como las de la seguridad de la información conlleva el diseño de procedimientos que te dotan de los medios necesarios para impedir que tu información y tus datos caigan en manos ajenas.
                        </Typography>
                        <Grid item xs={12} style={{ marginTop: '40px' }}>
                            <CarruselCompany
                                imgs={[{
                                    id: '1',
                                    cover: belden
                                },
                                {
                                    id: '2',
                                    cover: zkteco
                                },
                                {
                                    id: '3',
                                    cover: ubiquiti
                                },
                                {
                                    id: '4',
                                    cover: hikvision
                                },
                                {
                                    id: '5',
                                    cover: suprema
                                },
                                {
                                    id: '6',
                                    cover: access
                                },
                                {
                                    id: '7',
                                    cover: came
                                },
                                {
                                    id: '8',
                                    cover: surefi
                                },
                                {
                                    id: '9',
                                    cover: cyberpower
                                }, {
                                    id: '10',
                                    cover: alvarado
                                }, {
                                    id: '11',
                                    cover: smartbitt
                                }, {
                                    id: '12',
                                    cover: smart
                                }, {
                                    id: '13',
                                    cover: apc
                                }, {
                                    id: '14',
                                    cover: isb
                                }
                                ]}
                            />
                        </Grid>
                    </AreaDescription>
                </Grid>
                <Grid container style={{ marginTop: '40px' }} >
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={cableado}
                            title='Cableado estructurado'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={reubicacion}
                            title='Reubicacion de Site'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={controles}
                            title='Controles de Accesos'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={video}
                            title='Video Vigilancia'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={red}
                            title='Red LAN y WLAN '
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={cableadoe}
                            title='Cableado Eléctrico'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={cctv}
                            title='CCTV'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SistemsQuadInfo
                            img={arrendamiento}
                            title='Arrendamiento de Hardware'
                            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
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
                <ImgDescription
                    title='Hola mundo'
                    description='hola dfefsf  sfs ds  asfgasdgsdgsdg sdgsdgsdg sdgsdgsdgsd sdgsdgsdgsd  sdgsdg sdgsdg'
                    img={informaticaForenceImg}
                />
            </Grid>
            <Grid xs={12} >
                <InfoImage
                    title='Hola mundo'
                    description='hola dfefsf  sfs ds  asfgasdgsdgsdg sdgsdgsdg sdgsdgsdgsd sdgsdgsdgsd  sdgsdg sdgsdg'
                    img={informaticaForenceImg}
                />
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