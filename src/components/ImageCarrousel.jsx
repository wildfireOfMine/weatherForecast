import { Image } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
/* import {logo} from ''
 */
const ImageCarrousel = () => {
  const [indicators, setIndicators] = useState(0);

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
          <img key={indicators} src={picture.image} name={picture.name} style={{ 
            width: "100%", height: "100%", maxHeight: "600px", objectFit: "cover" }}/>
        </a> 
        <Button sx={{position:'absolute', zIndex: 1000, bottom: '10%', right: '48%', color:'red'}} onClick={nextPage}>Next</Button>
    </Box>
  )
}

export default ImageCarrousel



/* import React from 'react';
import Card from "../../../../components/ui/Card.jsx";
import { nanoid } from "nanoid";


let zoneData = [
    {
        name: 'Balze Alte',
        photos:
            [

                '/assets/img/cards/balze-1.jpg',
                '/assets/img/cards/balze-2.jpg',

            ],
        equipment: {
            places: 2,
            sunbed: true,
            deckchair: true
        },
        to: 'balzeAlte'
    },
    {
        name: 'Balze Basse',
        photos:
            [

                '/assets/img/cards/arco-3.jpg',
                '/assets/img/cards/balze-2.jpg',

            ],
        equipment: {
            places: 2,
            sunbed: true,
            deckchair: true
        },
        to: 'balzeBasse'
    },
    {
        name: 'Arco',
        photos:
            [
                '/assets/img/cards/arco-1.jpg',
                '/assets/img/cards/arco-2.jpg',
                
            ],
        equipment: {
            places: 112,
            sunbed: true,
            deckchair: true
        },
        to: 'arco'
    },
    {
        name: 'Mare',
        photos:
            [
                '/assets/img/cards/mare-1.jpg',
                '/assets/img/cards/mare-2.jpg',

            ],
        equipment: {
            places: 56,
            sunbed: true,
            deckchair: true
        },
        to: 'mare'
    },

    {
        name: 'Solarium',
        photos:
            [
                '/assets/img/cards/solarium-1.jpg',
                '/assets/img/cards/solarium-2.jpg',
            ],
        equipment: {
            places: 92,
            sunbed: true,
            deckchair: true
        },
        to: 'solarium'
    },
    {
        name: 'Spiaggia',
        photos:
            [

                '/assets/img/cards/spiaggia-2.jpg',
                '/assets/img/cards/spiaggia-3.jpg'
            ],
        equipment: {
            places: 16,
            sunbed: true,
            deckchair: true
        },
        to: 'spiaggia'
    },
    {
        name: 'Termale',
        photos:
            [
                '/assets/img/cards/termale-1.jpg',
                '/assets/img/cards/termale-2.jpg',
            ],
        equipment: {
            places: 9,
            sunbed: true,
            deckchair: true
        },
        to: 'termale'
    },
]

function Cards(props) {
    return (
        //grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-15 p-0 
        <div className={"flex flex-wrap gap-10"}>
            {
                zoneData.map((_, index) => (
                    <Card title={zoneData[index].name} key={nanoid()} to={zoneData[index].to} imgArray={zoneData[index].photos} equipment={zoneData[index].equipment} />
                ))
            }
        </div>
    );
}

export default Cards;
 */