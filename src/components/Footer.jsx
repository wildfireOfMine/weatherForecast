import { Email, GitHub, LinkedIn, Report } from '@mui/icons-material'
import { Box, List } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [clockCET, setClockCET] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        const time = new Date().toLocaleString("en-GB", {
          timeZone: "Europe/Madrid",
          hour12: false
        });
        setClockCET(time);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", 
    alignItems: "center", padding: "50px", backgroundColor: "black", color: "white", width: "100%", height: "18%" }}>
        <h1>&copy; Iván</h1>
        <h1>{clockCET}</h1>
        <h1><q>First, solve the problem. Then, write the code.</q></h1>
        <List sx={{ fontSize: "3em" }}>
            <LinkedIn fontSize='inherit'/>
            <GitHub fontSize='inherit'/>
            <Email fontSize='inherit'/>
        </List>
    </Box>
  )
}

export default Footer
