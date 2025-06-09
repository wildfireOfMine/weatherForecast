import { Box } from '@mui/material'
import React from 'react'

const Logo = ({width=5, height=5}) => {
  return (
    <img src='../../imgs/WeatherForecast.png' width={width} height={height} alt='Weather Forecast Logo'
    style={{
      minHeight: "75px",
      minWidth: "100px",
    }}/>
  )
}

export default Logo
