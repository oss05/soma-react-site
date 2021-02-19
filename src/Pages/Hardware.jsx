import React from 'react';
import { Container, Grid } from '@material-ui/core';
import InfoHoverCard from '../Components/InfoHoverCard';
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
import informaticaForenceImgLogo from '../Assets/imgs/informaticaForenceCardLogo.png';
export default function Hardware() {
    return (
        <Container maxWidth="xl">
          <Grid xs='3'>
            <InfoHoverCard
            img={informaticaForenceImg}
            logo={informaticaForenceImgLogo}
            title='Informatica Forence'
            description='Brindamos soluciones dedicadas a la Seguridad de la información y Peritaje Informático Forense ofreciendo alternativas preventivas y correctivas para salvaguarda las propiedades digitales y la información valiosa de su negocio.'
            />
          </Grid>
        </Container>
    )
}
