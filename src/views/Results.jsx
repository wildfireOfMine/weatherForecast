import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';
import LinkMap from '../components/LinkMap';
import Footer from '../components/Footer';
import BasicExample from '../components/Spinner';
import Spinner from '../components/Spinner';
import { Box, Rating, Typography } from '@mui/material';
import { AccessTime, Brightness1, Brightness2, Brightness4, Brightness5, Brightness7, Cloud, DarkMode, DewPoint, LockClock, ScatterPlot, Snowboarding, Snowing, Sunny, TempleHinduRounded, Train, Visibility, Warning, Water, Waves } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Results = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const {city}=useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setData] = useState(null);
    const [alerts, setAlerts] = useState(null);
    const [days, setDays] = useState(null);
    const [conditions, setConditions] = useState(null);
    const [errorDesc, setErrorDesc] = useState('');
    const { i18n, t } = useTranslation();

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

    <Box sx={{ flexGrow: 1, position: 'relative' }}>

    {loading ? <Spinner />

    : error ? <h1>Oops! {errorDesc}</h1>
        
    :   <>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '105%',
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

            {alerts.length > 0 && (
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
                        <Typography variant="h1">WARNING!</Typography>
                    </Box>
                    <Box sx={{
                        margin: '0 1em',
                    }}>
                        <ul className='alerts'>
                            {alerts.map((alert, index) => <li key={index}>{alert.event}</li>)}
                        </ul>
                    </Box>
                </Box>
            )}

            <Box className='generalConditions' sx={{
                maxWidth: '70%',
                backgroundColor: 'cyan',
                border: '5px solid blue',
                position: 'relative',
                zIndex: 1000,
                margin: '2em auto',
                padding: '1em 2em',
            }}>
                <Typography variant="h1">General Conditions</Typography>
                <ul>
                    <li>{t('cloud_cover')}: {conditions.cloudcover} <Cloud sx={{ verticalAlign: 'middle' }}/> </li>
                    <li>{t('conditions')}: {conditions.conditions} <TempleHinduRounded sx={{ verticalAlign: 'middle' }}/> </li>
                    <li>{t('datetime')}: {conditions.datetime} <AccessTime sx={{ verticalAlign: 'middle' }}/> </li>
                    <li>{t('dew')}: {conditions.dew} <DewPoint sx={{ verticalAlign: 'middle' }}/> </li>
                    <li>{t('feels_like')} {conditions.feelslike} <Visibility sx={{ verticalAlign: 'middle' }}/> </li>
                    <li>{t('humidity')}: {conditions.humidity}  <Waves sx={{ verticalAlign: 'middle' }}/> </li>
                    <li>{t('icon')}: {conditions.icon}</li>
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
            </Box>

            <Box className='daysGraphic' sx={{
                backgroundColor: 'yellow',
                border: '5px solid black',
                position: 'relative',
                zIndex: 1000,
                margin: '2em auto',
                maxWidth: '85%',
            }}>
                <ul>
                    {days.map((day, index) => <li key={index}>{day.conditions}</li>)}
                </ul>
            </Box>
        </>
            }
        </Box>

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
        <Footer />

    </Box>

  )
}

export default Results
