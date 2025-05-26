import React from 'react'
import Footer from '../components/Footer'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <Box sx={{
        position: 'relative',
        backgroundImage: 'url(../../imgs/NotFound.jpg)',
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
          <Typography variant='h1' sx={{
            position:'relative',
            zIndex:999,
            color:"white", 
            WebkitTextStroke: "2px black",
            fontSize: '10em',
          }}>{t("page_not_found")}</Typography>
          <Typography variant='h2' sx={{
            position:'relative',
            zIndex:999,
            color:"white", 
            WebkitTextStroke: "2px black",
            fontSize: '7em',
          }}>{t("where_are_you")}</Typography>
      </Box>
      <Footer/>
    </>
  )
}

export default NotFound
