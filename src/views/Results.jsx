import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GoBack from '../components/GoBack';
import LinkMap from '../components/LinkMap';
import Footer from '../components/Footer';
import BasicExample from '../components/Spinner';
import Spinner from '../components/Spinner';
import { Box, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';

const Results = () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const {city}=useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setData] = useState(null);
    const [alerts, setAlerts] = useState(null);
    const [days, setDays] = useState(null);
    const [conditions, setConditions] = useState(null);

    useEffect(() =>{
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`, {
             mode: 'cors'
        })
        .then((result) => {
            return result.json()
        }).then((response)=>{
            console.log(response);
            setData(response);
            setAlerts(response.alerts);
            setDays(response.days);
            setConditions(response.currentConditions)
        }).catch((err) => {
            console.log(err);
            setError(true);
        }).finally((final) =>{
            setLoading(false)
            console.log(final);
        });
    }, [city])

    console.log(conditions);

    return (
    <>
        { loading ? <Spinner/>

        : error ? <h1>Oops!</h1> 

        : 
        <>
            <Box sx={{
                backgroundImage:'url(../../imgs/Tokyo.jpg)',
                width: '100%',
                height: '1190px',
                minHeight: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                }}> 

                <Box sx={{
                    position: 'absolute',
                    top: 110,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    opacity: 0.4,
                    zIndex: 998,
                }}/>

                    <Box sx={{
                        margin: '0 40em',
                        zIndex: 1000,
                        position: 'relative',
                        color: 'white',
                    }}>
                        <h1>{data.resolvedAddress}</h1>
                        <h2><q>{data.description}</q></h2>
                    </Box>

                    <Box className='map' sx={{
                        position: 'relative',
                        zIndex: 1000,
                    }}>
                        <LinkMap lat={data.latitude} lng={data.longitude}/>
                    </Box>

                    {alerts.length > 0 && ( 
                    <Box sx={{
                        backgroundColor: '#FF474C',
                        border: '5px solid red',
                        zIndex: 1000,
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Warning sx={{ color: 'yellow', }}/>
                        <Typography >WARNING!</Typography>
                            <ul className='alerts'>
                                {alerts.map((alert, index) => {
                                    return <li key={index}>{alert.event}</li>
                                })}
                            </ul>
                    </Box>
                    )}

                    <Box className='generalConditions'
                    sx={{
                        backgroundColor: 'cyan',
                        border: '5px solid blue',
                        position: 'relative',
                        zIndex: 1000,
                    }}>
                        <ul>
                            <li>{conditions.cloudcover}</li>
                            <li>{conditions.conditions}</li>
                            <li>{conditions.datetime}</li>
                            <li>{conditions.dew}</li>
                            <li>{conditions.feelslike}</li>
                            <li>{conditions.humidity}</li>
                            <li>{conditions.icon}</li>
                            <li>{conditions.moonphase}</li>
                            <li>{conditions.precip}</li>
                            <li>{conditions.pressure}</li>
                            <li>{conditions.snow}</li>
                            <li>{conditions.solarenergy}</li>
                            <li>{conditions.solarradiation}</li>
                            <li>{conditions.stations}</li>
                            <li>{conditions.sunrise}</li>
                            <li>{conditions.sunset}</li>
                        </ul>
                    </Box>

                    <Box className='daysGraphic'
                    sx={{
                        backgroundColor: 'yellow',
                        border: '5px solid black',
                        position: 'relative', 
                        zIndex: 1000,
                    }}>
                        <ul>
                            {days.map((day, index) => {
                                return <li key={index}>{day.conditions}</li>
                            })}
                        </ul>
                    </Box>

            </Box>
        </>
        }
        <GoBack/>
        <Footer/>
    </>
  )
}

export default Results
