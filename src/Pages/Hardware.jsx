import React from 'react';
import { Container, Grid } from '@material-ui/core';
import InfoHoverCard from '../Components/InfoHoverCard';
import SimpleInfoCard from '../Components/SimpleInfoCard';
import RadiusImgInfoCard from '../Components/RadiusImgInfoCard';
import BgImgUpInfo from '../Components/BgImgUpInfo';
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
import CarruselBgImgUpInfo from '../Components/CarruselBgImgUpInfo';
import informaticaForenceImg from '../Assets/imgs/informaticaForenceCard.png';
import informaticaForenceImgLogo from '../Assets/imgs/informaticaForenceCardLogo.png';
import cableadoEstructurado from '../Assets/imgs/cableadoEstructurado.png';
import CarruselPage from '../Components/CarruselPage';

export default function Hardware() {
    return (
        <Container maxWidth="xl">
          <Grid xs={12} >
            <CarruselBgImgUpInfo
              data={
                [
                  {
                    id: '1',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo. Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '2',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '3',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '4',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '5',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '6',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '7',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '8',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                  {
                    id: '9',
                    title: 'Instalacion sin obras',
                    description: 'Le proporcionaremos un panel de administración de contenido intuitivo en su sitio web. Implementamos soluciones que automatizan tu trabajo.',
                    logo: `${informaticaForenceImg}`
                  },
                ]
              } 

            />
          </Grid>
        </Container>
    )
}
