import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../components/SearchBar';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import ImageCarrousel from '../components/ImageCarrousel';
import { Box } from '@mui/material';

const Home = () => {
    const { i18n, t } = useTranslation();
  
  return (
    <>
      <Box sx={{ position: "absolute", zIndex: "999"}}>
        <h1>{t('weather_app')}</h1>
      </Box>
        <ImageCarrousel/>
        <h2>Welcome! This is a Weather Forecast app, powered 
          by the API <a href='https://www.visualcrossing.com/' target='_blank'>Visual Crossing</a>. This is a task 
          inside the <a href='https://www.theodinproject.com/' target='_blank'>The Odin Project</a> course. If speaking strictly, 
          this should have been done in JavaScript, 
        but, I thought it would be far funnier to keep improving my knowledgement in React MUI!</h2>

        <h2>{t('looking')}</h2>
        <SearchBar/>
    </>
  )
}

export default Home
