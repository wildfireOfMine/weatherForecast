import React from 'react'
import SearchBar from '../components/SearchBar'
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

const SearchView = () => {
    const { i18n, t } = useTranslation();
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
              <Box sx={{zIndex: 999}}>
                <Typography variant="h1" sx={{
                  WebkitTextStroke: "2px black",
                  color: "white",
                }}>{t('looking_for_a_city')}</Typography>
                <SearchBar/>
              </Box>
        </Box>
        <Footer/>
    </>
  )
}

export default SearchView
