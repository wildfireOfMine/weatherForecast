import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';
import LinkMap from '../components/LinkMap';
import Footer from '../components/Footer';
import BasicExample from '../components/Spinner';
import Spinner from '../components/Spinner';
import { Box, Grid, Rating, Typography, useMediaQuery } from '@mui/material';
import { AccessTime, Brightness1, Brightness2, Brightness4, Brightness5, Brightness7, Cloud, DarkMode, DewPoint, LockClock, ScatterPlot, Snowboarding, Snowing, Sunny, TempleHinduRounded, Train, Visibility, Warning, Water, Waves } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useTheme } from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const fahrenheitToCelsius = (days) => {
    if (days.length > 1) {        
        const daysCelsius = [];
        for (let i = 0; i<days.length; i++) {
            daysCelsius.push(((days[i] - 32) / 1.8).toFixed(2));
        }
            return daysCelsius;

    } else {
        days = (days - 32) / 1.8;
        return days.toFixed(2);
    }
}

const Results = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const {city}=useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setData] = useState(null);
    const [alerts, setAlerts] = useState(null);
    const [days, setDays] = useState(null);
    const [fiveDays, setFiveDays] = useState([]);
    const [fiveDaysTitle, setFiveDaysTitle] = useState([]);
    const [conditions, setConditions] = useState(null);
    const [errorDesc, setErrorDesc] = useState('');
    const { i18n, t } = useTranslation();
    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.down("lg"));
    const extraLarge = useMediaQuery(theme.breakpoints.down("xl"));

    useEffect(() =>{
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`, {
             mode: 'cors'
        })
        .then((result) => {
            return result.json()
        }).then((response)=>{
            console.log(response);
            console.log(response.days);
            setData(response);
            setAlerts(response.alerts);
            
            setDays(response.days);
            setConditions(response.currentConditions)

            const firstFiveTemps = response.days.slice(0, 5).map(day => day.temp);
            const firstFiveTempsCelsius = fahrenheitToCelsius(firstFiveTemps);
            setFiveDays(firstFiveTempsCelsius);
            
            const firstFiveTitles = response.days.slice(0, 5).map(day => day.datetime);
            setFiveDaysTitle(firstFiveTitles);
        }).catch((err) => {
            console.log(err);
            setError(true);
            setErrorDesc(err.message || JSON.stringify(err));
        }).finally((final) =>{
            setLoading(false)
            console.log(final);
        });
    }, [city])

    console.log(conditions);

    return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: 'url(../../imgs/Tokyo.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
    }}>

    <>
        {loading ?
        
        <Box sx={{ flexGrow: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '110%',
                backgroundColor: 'black',
                opacity: 0.4,
                zIndex: 998,
            }} />

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                position: 'absolute',
                transform: 'scale(5)',
            }}>
                <Spinner />
            </Box>
        </Box>
        


        : error ? 
        
        <Box sx={{ flexGrow: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '112%',
                backgroundColor: 'black',
                opacity: 0.4,
                zIndex: 998,
            }} />

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                position: 'absolute',
                flexDirection: 'column',
            }}>
                <Typography variant="h1" sx={{
                    WebkitTextStroke: "2px black",
                    color: "white",
                    textAlign: 'center',
                }}>{t('oops')}Oops!</Typography>
                
                <Typography variant='h2' sx={{
                    WebkitTextStroke: "2px black",
                    color: "white",
                    textAlign: 'center',
                }}>{errorDesc}</Typography>
            </Box>


        </Box>
            
        :   <Box sx={{ flexGrow: 1, position: 'relative'}}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '104%',
                    backgroundColor: 'black',
                    opacity: 0.4,
                    zIndex: 998,
                }} />

                <Box sx={{
                    margin: '2em auto',
                    zIndex: 1000,
                    position: 'relative',
                    color: 'white',
                    WebkitTextStroke: "1px black",
                    maxWidth: '50%',
                    }}>
                    <Typography variant='h2'>{data.resolvedAddress}</Typography>
                    <Typography variant='h3'><q>{data.description}</q></Typography>
                </Box>

                    <Box className='map' sx={{ position: 'relative', zIndex: 1000 }}>
                        <LinkMap lat={data.latitude} lng={data.longitude} />
                    </Box>

                {alerts.length > 0 && 
                    
                    (
                    !large ?
                    <>
                        <Box sx={{
                            backgroundColor: '#FF474C',
                            border: '5px solid red',
                            zIndex: 1000,
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            maxWidth: '50%',
                            maxHeight: 500,
                            height: '24vh',
                            margin: '2em auto',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Warning sx={{ color: 'yellow', fontSize: '6em', '& path': {stroke: 'black',strokeWidth: 1,} }} />
                                <Typography variant="h1">{t('warning')}</Typography>
                            </Box>
                            <Box sx={{
                                margin: '0 1em',
                            }}>
                                <ul className='alerts'>
                                    {alerts.map((alert, index) => <li key={index}>{alert.event}</li>)}
                                </ul>
                            </Box>
                        </Box>
                    </>
                    : <Box sx={{
                            backgroundColor: '#FF474C',
                            border: '5px solid red',
                            zIndex: 1000,
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            maxWidth: '90%',
                            maxHeight: 500,
                            height: '24vh',
                            margin: '2em auto',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Warning sx={{ color: 'yellow', fontSize: '5em', '& path': {stroke: 'black',strokeWidth: 1,} }} />
                                <Typography variant="h2">{t('warning')}</Typography>
                            </Box>
                            <Box sx={{
                                margin: '0 1em',
                            }}>
                                <ul className='alerts'>
                                    {alerts.map((alert, index) => <li key={index}>{alert.event}</li>)}
                                </ul>
                            </Box>
                        </Box>

                    )
                }

                <Box className='generalConditions' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 1000,
                    margin: '2em 0',
                    padding: '1em 2em',
                    fontSize: '2em',
                }}>
                    
                    <Grid container spacing={4} sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Grid size={12}>
                            {!small ? <Typography variant="h1">{t('general_conditions')}</Typography> : 
                            <Typography variant="h2">{t('general_conditions')}</Typography>}
                        </Grid>
                        { !medium ? 
                        <>
                        <Grid size={5}>
                            <li>{t('cloud_cover')}: {conditions.cloudcover} <Cloud sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('conditions')}: {conditions.conditions} <TempleHinduRounded sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('datetime')}: {conditions.datetime} <AccessTime sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('dew')}: {conditions.dew} <DewPoint sx={{ verticalAlign: 'middle' }}/> </li>
                        </Grid>
                        <Grid size={5}>
                            <li>{t('temp')}: {fahrenheitToCelsius(days[0].temp)}ºC</li>
                            <li>{t('feels_like')}: {fahrenheitToCelsius(conditions.feelslike)} <Visibility sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('humidity')}: {conditions.humidity}  <Waves sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('moonphase')}: {conditions.moonphase} <Brightness2 sx={{ verticalAlign: 'middle' }}/> </li>
                        </Grid>
                        <Grid size={5}>
                            <li>{t('precip')}: {conditions.precip} <ScatterPlot sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('pressure')}: {conditions.pressure} <Water sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('snow')}: {conditions.snow} <Snowing sx={{ verticalAlign: 'middle' }} /> </li>
                            <li>{t('solar_energy')}: {conditions.solarenergy} <Brightness5 sx={{ verticalAlign: 'middle' }}/> </li>
                        </Grid>
                        <Grid size={5}>
                            <li>{t('solar_radiation')}: {conditions.solarradiation} <Brightness7 sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('stations')}: {conditions.stations} <Train sx={{ verticalAlign: 'middle' }}/> </li>
                            <li>{t('sunrise')}: {conditions.sunrise} <Sunny sx={{ verticalAlign: 'middle' }}/></li>
                            <li>{t('sunset')}: {conditions.sunset} <DarkMode sx={{ verticalAlign: 'middle' }}/> </li>
                        </Grid>
                        </>
                        : <>
                            <ul>
                                <li>{t('cloud_cover')}: {conditions.cloudcover} <Cloud sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('conditions')}: {conditions.conditions} <TempleHinduRounded sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('datetime')}: {conditions.datetime} <AccessTime sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('dew')}: {conditions.dew} <DewPoint sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('temp')}: {fahrenheitToCelsius(days[0].temp)}ºC</li>
                                <li>{t('feels_like')}: {fahrenheitToCelsius(conditions.feelslike)} <Visibility sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('humidity')}: {conditions.humidity}  <Waves sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('moonphase')}: {conditions.moonphase} <Brightness2 sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('precip')}: {conditions.precip} <ScatterPlot sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('pressure')}: {conditions.pressure} <Water sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('snow')}: {conditions.snow} <Snowing sx={{ verticalAlign: 'middle' }} /> </li>
                                <li>{t('solar_energy')}: {conditions.solarenergy} <Brightness5 sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('solar_radiation')}: {conditions.solarradiation} <Brightness7 sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('stations')}: {conditions.stations} <Train sx={{ verticalAlign: 'middle' }}/> </li>
                                <li>{t('sunrise')}: {conditions.sunrise} <Sunny sx={{ verticalAlign: 'middle' }}/></li>
                                <li>{t('sunset')}: {conditions.sunset} <DarkMode sx={{ verticalAlign: 'middle' }}/> </li>
                            </ul>
                          </>
                        }
                    </Grid>
                </Box>

                <Box className='daysGraphic' sx={{
                    backgroundColor: 'white',
                    height: 500,
                    position: 'relative',
                    zIndex: 1000,
                    margin: '2em auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Line data={{
                        labels: fiveDaysTitle,
                        datasets: [
                            {
                            label: t('weather_legend'),
                            data: fiveDays,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.3,
                            fill: true,
                            }
                        ]
                    }}/>
                </Box>
            </Box>
            }
        </>

    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        padding: '1em',
        margin: '0 1em',
        zIndex: 998,
    }}>
        <GoBack />
    </Box>
        <Box sx={{
            zIndex: 998,
        }}>
            <Footer />
        </Box>
        

    </Box>

  )
}

export default Results
