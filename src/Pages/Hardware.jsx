import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InfoHoverCard from '../Components/InfoHoverCard';
import SistemsQuadInfo from '../Components/SistemsQuadInfo';
import TitleWhitDecorate from '../Components/TitleWhitDecorate';
import AreaDescription from '../Components/AreaDescription';
import InfoVerticalDecorate from '../Components/InfoVerticalDecorate';
import ImageInfo from '../Components/ImageInfo';
import InfoImage from '../Components/InfoImage';
import TitleEnterpriseCarrusel from '../Components/TitleEnterpriseCarrusel';
import ImageOffsetInfo from '../Components/ImageOffsetInfo';
import ImgDescription from '../Components/ImgDescription';
import PageTitle from '../Components/PageTitle';
import Prueba from '../Components/Prueba';
import CarruselCompany from '../Components/CarruselCompany';
import informaticaForenceImgLogo from '../Assets/imgs/informaticaForenceCardLogo.png';
import cableadoEstructurado from '../Assets/imgs/cableadoEstructurado.png';
import CarruselPage from '../Components/CarruselPage';
import sistemasLogo from '../Assets/imgs/sistemas_logo.png';

//Imagenes
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
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


export default function Hardware() {
    const useStyles = makeStyles((theme) => ({
        carouselBorderRadius: {
            borderBottomLeftRadius: 25
        },
        subtitle: {
            fontWeight: 'bold',
            color: theme.palette.text.gray
        }
    }))

    const classes = useStyles();
    return (
        <Container maxWidth="xl">

            {/* <Grid xs='6'>
            <SistemsQuadInfo 
            img={cableadoEstructurado}
            title='Cableado estructurado'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
            />
          </Grid> */}
            {/* <Grid xs='6'>
            <TitleWhitDecorate 
            title='Hola mundo'
            />
          </Grid> */}


            {/* <Grid xs='12'>
            <AreaDescription 
            img={informaticaForenceImg}
            >
              <TitleWhitDecorate 
              title='Hola mundo'
              />
              <p style={{marginRight: 40 + 'px'}} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum itaque, dolor aperiam blanditiis atque accusamus labore tempora at quia unde temporibus inventore, laborum esse magni sed laudantium neque deleniti sint
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo, obcaecati laudantium praesentium tempora quae possimus nulla explicabo dicta voluptatum, vel minima nihil sed nobis autem. Sit, ut dolor? Debitis!
              </p>
              <Grid item xs={12}>
                <CarruselCompany
                  imgs={[ {
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
            </AreaDescription>
          </Grid> */}
            <Grid container>
                <Grid container justify="center" item xs={12} >
                    <PageTitle
                        img={sistemasLogo}
                        title="Ingenieria en Sistemas"
                    />
                </Grid>
                <Grid item xs={12} >
                    <Paper elevation={10} className={classes.carouselBorderRadius}>
                        <CarruselPage
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
                            }]}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <InfoVerticalDecorate
                        title='El principal compromiso es ofrecer consultoria tecnológica profesional'
                        details='Nuestro equipo se encuentra capacitado para dar soporte técnico a usuarios de manera remota o presencial, en las distintas plataformas en equipos de cómputo (Microsoft Windows, MacOS, GNU / Linux) así como también a dispositivos móviles (Android, iOS)'
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h5" align="center" className={classes.subtitle}>
                        Socios Tecnológicos
                    </Typography>
                    <CarruselCompany
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
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={informaticaForenceImg}
                        logo={informaticaForenceImgLogo}
                        title='Informatica Forense'
                        description='Brindamos soluciones dedicadas a la Seguridad de la información y Peritaje Informático Forense ofreciendo alternativas preventivas y correctivas para salvaguarda las propiedades digitales y la información valiosa de su negocio.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={soporte}
                        logo={soporteLogo}
                        title='Soporte Técnico'
                        description='Servicios en sitio y remoto a sus equipos de cómputo y apoyo a sus usuarios.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={seguridad}
                        logo={seguridadLogo}
                        title='Seguridad Administrada'
                        description='Utilizamos las herramientas de seguridad más robustas para mantener la seguridad e integridad de la información de nuestros clientes, a través de la implementación de diferentes metodologías para la protección de datos (DRP, implementación de políticas, respaldos automáticos, borrado seguro de la información, etc.)'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={nube}
                        logo={nubeLogo}
                        title='Servicios en la Nube'
                        description='Flexibilidad y alta eficiencia en tu negocio optimizando costos para crecer a tu propio ritmo.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={comunicaciones}
                        logo={comunicacionesLogo}
                        title='Comunicaciones Unificadas'
                        description='Integración de equipos altamente productivos para facilitar la comunicación segura, confiable y totalmente dispobible para cada uno de los colaboradores.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={respaldos}
                        logo={respaldosLogo}
                        title='Sistemas de respaldos de Información'
                        description='Solución de Resguardo de Información automatizado  bajo estandar de políticas.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={infra}
                        logo={infraLogo}
                        title='Administración de Infraestructura'
                        description='Es un servicios basado en las mejores prácticas en IT que nos permite operar, proporcionar soporte y mantenimiento proactivo a la infraestructura de nuestros clientes. '
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={telefonia}
                        logo={telefoniaLogo}
                        title='Telefonía IP'
                        description='Actualización de Tecnológia a costos accesibles logrando reducción de costos en sus servicios de telefonicos.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={correo}
                        logo={correoLogo}
                        title='Correo Electrónico'
                        description='Como Partner de los  principales proveedores de servicios de Correo electrónico SOMA cuenta con un abanico de posibilidades de soluciones de comunicación escrita por este medio.'
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={procesos}
                        logo={procesosLogo}
                        title='Creación de Procesos  en IT'
                        description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. '
                    />
                </Grid>
                <Grid item xs={12}>
                    <InfoHoverCard
                        img={aspel}
                        logo={aspelLogo}
                        title='Soporte Aspel / Compac'
                        description='Contamos con personal altamente capacitado para dar soporte de manera técnica (no de operación) para sistemas Aspel y Contpqa, realizar migraciones de sistemas a nuevos dispositivos e implementación de los mismos.'
                    />
                </Grid>
            </Grid>


            {/* <Grid xs={12} >
            <TitleEnterpriseCarrusel 
            title='Tecnologia'
            imgs={[ {
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
          </Grid> */}
            {/* <Grid xs={12} >
            <ImgDescription
            title='Hola mundo'
            description='hola dfefsf  sfs ds  asfgasdgsdgsdg sdgsdgsdg sdgsdgsdgsd sdgsdgsdgsd  sdgsdg sdgsdg'
            img={informaticaForenceImg}
            /> 
          </Grid>*/}
            {/* <Grid xs={12} >
            <InfoImage
            title='Hola mundo'
            description='hola dfefsf  sfs ds  asfgasdgsdgsdg sdgsdgsdg sdgsdgsdgsd sdgsdgsdgsd  sdgsdg sdgsdg'
            img={informaticaForenceImg}
            />
          </Grid> */}
            {/* <Grid xs={5} >
                <ImageOffsetInfo
                    title='Hola mundo'
                    description='hola dfefsf  sfs ds  asfgasdgsdgsdg sdgsdgsdg sdgsdgsdgsd sdgsdgsdgsd  sdgsdg sdgsdg'
                    img={informaticaForenceImg}
                />
            </Grid> */}
        </Container>
    )
}