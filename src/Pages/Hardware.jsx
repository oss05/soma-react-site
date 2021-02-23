import React from 'react';
import { Container, Grid } from '@material-ui/core';
import InfoHoverCard from '../Components/InfoHoverCard';
import SistemsQuadInfo from '../Components/SistemsQuadInfo';
import TitleWhitDecorate from '../Components/TitleWhitDecorate';
import AreaDescription from '../Components/AreaDescription';
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
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
import informaticaForenceImgLogo from '../Assets/imgs/informaticaForenceCardLogo.png';
import cableadoEstructurado from '../Assets/imgs/cableadoEstructurado.png';
import CarruselPage from '../Components/CarruselPage';

export default function Hardware() {
    return (
        <Container maxWidth="xl">
          <Grid xs={3} >
            <DescriptiveCard 
            title='Instalacion sin obras'
            description='La instalacion se realiza sin obras, adapatandonos a la vivienda ya construida'
            logo={informaticaForenceImg}
            />
          </Grid>
        </Container>
    )
}
