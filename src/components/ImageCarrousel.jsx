import { Image } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
/* import {logo} from ''
 */
const ImageCarrousel = () => {
  const { i18n, t } = useTranslation();
  const [indicators, setIndicators] = useState(Math.floor(Math.random() * (3 - 0 + 0)) + 0);

  console.log(indicators);

  const nextPage = () => {
    setIndicators((indicator) => (indicator + 1) % imgsArray.length);
  }
 
  let imgsArray = [
    {
      image:"../../imgs/italy.jpg",
      name:"Colosseum",
      credits:"https://pixabay.com/photos/italy-rome-colosseum-sunset-9505446/",
    },
    {
      image:"../../imgs/desert.jpg",
      name:"Desert",
      credits:"https://pixabay.com/photos/desert-nature-landscape-africa-9449657/",
    },
    {
      image:"../../imgs/korea.jpg",
      name:"Korea",
      credits:"https://pixabay.com/photos/south-korea-street-seoul-dusk-6918828/",
    }
  ]

  const picture = imgsArray[indicators]

  return (
    <Box sx={{ width: "100%", height: "100%", position: 'relative', maxHeight: "600px" }}>
        <Box sx={{ 
            backgroundImage:'url(../../imgs/WeatherForecastText.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            maxHeight: '600px',
            zIndex: 999
        }}/>
        <Box sx={{
        position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            maxHeight: '600px',
            backgroundColor: 'black',
            opacity: 0.4,
            zIndex: 998,
        }}/>
        <a href={picture.credits} key={indicators} target='_blank'>
          <img key={indicators} src={picture.image} name={picture.name} alt={picture.credits} style={{ 
            width: "100%", height: "100%", maxHeight: "600px", objectFit: "cover" }}/>
        </a> 
    </Box>
  )
}

export default ImageCarrousel