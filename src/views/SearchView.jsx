import React from 'react'
import SearchBar from '../components/SearchBar'
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';

const SearchView = () => {
    const { i18n, t } = useTranslation();
    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.down("lg"));
    const extraLarge = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
    <Box sx={{
            position: 'relative',
            backgroundImage: 'url(../../imgs/Valencia.jpg)',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
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
              <Box sx={{zIndex: 999, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                { !large ? 
                    <Typography variant="h1" sx={{
                      WebkitTextStroke: "2px black",
                      color: "white",
                    }}>{t('looking_for_a_city')}</Typography>
                    :
                     <Typography variant="h2" sx={{
                      WebkitTextStroke: "2px black",
                      color: "white",
                    }}>{t('looking_for_a_city')}</Typography>
                }
                <SearchBar/>
                
              </Box>
        </Box>
        <Footer/>
    </>
  )
}

export default SearchView
