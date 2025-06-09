import { Email, GitHub, LinkedIn, Report } from '@mui/icons-material'
import { Box, List, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

const Footer = () => {
    const { i18n, t } = useTranslation();
    const [clockCET, setClockCET] = useState("");
    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.down("lg"));
    const extraLarge = useMediaQuery(theme.breakpoints.down("xl"));

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
    <Box className="footer" sx={{ 
      display: "flex", 
      justifyContent: "space-evenly", 
      alignItems: "center", 
      padding: "2rem 1rem",
      backgroundColor: "black", 
      color: "white", 
      width: "100%",
    }}>
        <h1>&copy; Iván</h1>
        <h1>{!large && clockCET}</h1>
        <h1>{!medium && <q>{t("first_solve_the_problem")}</q>}</h1>
        <List sx={{ fontSize: "3em" }}>
            <a href="https://www.linkedin.com/in/iv%C3%A1n-anguera-moya-981b86319/"><LinkedIn fontSize='inherit'/></a>
            <a href="https://github.com/wildfireOfMine"><GitHub fontSize='inherit'/></a>
            <a href='mailto:iamtheanguera@gmail.com'><Email fontSize='inherit'/></a>
        </List>
    </Box>
  )
}

export default Footer
