import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../components/SearchBar';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import ImageCarrousel from '../components/ImageCarrousel';
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const Home = () => {
    const { i18n, t } = useTranslation();
  
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
              <h2>Welcome! This is a Weather Forecast app, powered 
              by the API <a href='https://www.visualcrossing.com/' target='_blank'>Visual Crossing</a>. This is a task 
              inside the <a href='https://www.theodinproject.com/' target='_blank'>The Odin Project</a> course. If speaking strictly, 
              this should have been done in JavaScript, 
              but, I thought it would be far funnier to keep improving my knowledgement in React MUI!</h2>
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
                <h2>{t('looking')}</h2>
                <SearchBar/>
              </Box>
          </Box>
        
        
        <Footer/>
    </>
  )
}

export default Home
