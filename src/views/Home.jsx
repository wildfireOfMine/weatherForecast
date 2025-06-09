import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../components/SearchBar';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import ImageCarrousel from '../components/ImageCarrousel';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { useTheme } from 'styled-components';

const Home = () => {
    const { i18n, t } = useTranslation();
    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.down("lg"));
    const extraLarge = useMediaQuery(theme.breakpoints.down("xl"));
  
  return (
    <>
        <ImageCarrousel/>
          <Box sx={{
            position: 'relative',
            backgroundImage: 'url(../../imgs/Prague.jpg)',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                opacity: 0.4,
                zIndex: 998,
              }}/>
              { !large ? <Typography variant="h2"
              sx={{
                position: 'relative',
                zIndex: 1000,
                textAlign: 'center',
                color:"white", 
                WebkitTextStroke: "2px black",
                padding: "0 1em",
                fontSize: '4.5em', /* {
                  xs: '2.5rem',
                  sm: '3rem',
                  md: '3.5rem',
                  lg: '4.5rem',
                }, */
              }}>{t('home_desc1')}<a href='https://www.visualcrossing.com/' target='_blank'>Visual Crossing</a>. 
               {t('home_desc2')}<a href='https://www.theodinproject.com/' target='_blank'>The Odin Project</a> 
               {t('home_desc3')}</Typography>
              
              : <Typography variant="h2"
              sx={{
                position: 'relative',
                zIndex: 1000,
                textAlign: 'center',
                minHeight: '50%',
                maxHeight: '100%',
                color:"white", 
                WebkitTextStroke: "1px black",
                padding: "0 1em",
                fontSize: '2em', /* {
                  xs: '2.5rem',
                  sm: '3rem',
                  md: '3.5rem',
                  lg: '4.5rem',
                }, */
              }}>{t('home_desc1')}<a href='https://www.visualcrossing.com/' target='_blank'>Visual Crossing</a>. 
               {t('home_desc2')}<a href='https://www.theodinproject.com/' target='_blank'>The Odin Project</a> 
               {t('home_desc3')}</Typography>
              }
              
          </Box>
          <Box sx={{
            position: 'relative',
            backgroundImage: 'url(../../imgs/Clouds.jpg)',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                opacity: 0.4,
                zIndex: 998,
              }}/>
              <Box sx={{zIndex: 999}}>
                {!large ? <Typography variant='h1' sx={{
                  textAlign:"center", color:"white", WebkitTextStroke: "2px black",
                  fontSize: {
                   xs: "3em",
                   sm: "5em",
                   md: "7em",
                   lg: "10em", 
                  }
                }}>{t('looking')}</Typography>
              :  <Typography variant='h1' sx={{
                  textAlign:"center", color:"white", WebkitTextStroke: "1px black",
                  fontSize: {
                   xs: "3em",
                   sm: "5em",
                   md: "7em",
                   lg: "10em", 
                  }
                }}>{t('looking')}</Typography>
                }
                
                <SearchBar size="big"/>
              </Box>
          </Box>
        
        
        <Footer/>
    </>
  )
}

export default Home
