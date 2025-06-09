import React from 'react'
import Footer from '../components/Footer'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

const NotFound = () => {
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
        { !medium ? 
          <>
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
          </>
          : 
          <>
          <Typography variant='h2' sx={{
              position:'relative',
              zIndex:999,
              color:"white", 
              WebkitTextStroke: "2px black",
              fontSize: '7em',
              textAlign: 'center',
            }}>{t("page_not_found")}</Typography>
            <Typography variant='h3' sx={{
              position:'relative',
              zIndex:999,
              color:"white", 
              WebkitTextStroke: "2px black",
              fontSize: '4em',
              textAlign: 'center',
            }}>{t("where_are_you")}</Typography>
          </>
          }
      </Box>
      <Footer/>
    </>
  )
}

export default NotFound
