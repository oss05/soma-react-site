import React from 'react';
import { Container, Grid } from '@material-ui/core';
import InfoHoverCard from '../Components/InfoHoverCard';
import SistemsQuadInfo from '../Components/SistemsQuadInfo';
import TitleWhitDecorate from '../Components/TitleWhitDecorate';
import AreaDescription from '../Components/AreaDescription';
import Prueba from '../Components/Prueba';
import CarruselCompany from '../Components/CarruselCompany';
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
import informaticaForenceImgLogo from '../Assets/imgs/informaticaForenceCardLogo.png';
import cableadoEstructurado from '../Assets/imgs/cableadoEstructurado.png';


export default function Hardware() {
    return (
        <Container maxWidth="xl">
          {/* <Grid xs='3'>
            <InfoHoverCard
            img={informaticaForenceImg}
            logo={informaticaForenceImgLogo}
            title='Informatica Forence'
            description='Brindamos soluciones dedicadas a la Seguridad de la información y Peritaje Informático Forense ofreciendo alternativas preventivas y correctivas para salvaguarda las propiedades digitales y la información valiosa de su negocio.'
            />
          </Grid> */}
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
          {/* <Grid xs='6'>
            <CarruselCompany />
          </Grid> */}
          {/* <Grid xs='6'>
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
          </Grid> */}
          <Grid xs='12'>
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
          </Grid>
        </Container>
    )
}
