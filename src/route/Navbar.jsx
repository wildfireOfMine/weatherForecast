import { Cloud } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import {Link, NavLink} from "react-router-dom"
import SearchBar from "../components/SearchBar";
import { AppBar, Box, Button, ButtonGroup, MenuItem, Select, Toolbar } from "@mui/material";
import { useState } from "react";
import Logo from "../components/Logo";

/************************************************************************************************** */

export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [name, setName] = useState(i18n.language || 'en');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Box className="header" sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
      <AppBar position="static" sx={{ justifyContent: 'space-around', backgroundColor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ width: "10%", display: "flex", alignItems: "center", fontSize: "1.3em" }}>
              <NavLink to="/">
                <Logo width="100%" height="100%"/>
              </NavLink>
            </Box>


            <SearchBar size="small" colour="black"  fillColour="black"  />

            <Box sx={{ 
              width: {
                xs: '5%',
                sm: '10%', 
                md: '15%', 
                lg: '20%'
              }, 
              display: "flex", 
              justifyContent: "space-evenly", 
              alignItems: "center", 
              fontSize: {
                xs: '0.2em',
                sm: '0.5em', 
                md: '1em', 
                lg: '1.4em'
              }}}>
              <NavLink 
                to="/"
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {t('home')}
              </NavLink>
                
              <NavLink 
                to="/search"
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {t('search')}
              </NavLink>

              <Select
                value={name}
                label="Language"
                onChange={handleChange}
                sx={{
                  width: {
                   xs: "5%",
                   sm: "5%",
                   md: "10%",
                   lg: "20%", 
                  },
                fontSize: {
                   xs: 1,
                   sm: 5,
                   md: 10,
                   lg: "20px", 
                },
                '& .MuiSelect-select': {
                fontSize: {
                  xs: '10%',
                  sm: '20%',
                  md: '50%',
                  lg: '100%',
                },
              },
                }}
              >
                <MenuItem value="en" onClick={()=>i18n.changeLanguage("en")}>EN</MenuItem>
                <MenuItem value="es" onClick={()=>i18n.changeLanguage("es")}>ES</MenuItem>
                <MenuItem value="cat" onClick={()=>i18n.changeLanguage("cat")}>CAT</MenuItem>
                <MenuItem value="it" onClick={()=>i18n.changeLanguage("it")}>IT</MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </AppBar>
    </Box>
  )
}
