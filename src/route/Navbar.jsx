import { Cloud } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import {Link, NavLink} from "react-router-dom"
import SearchBar from "../components/SearchBar";
import { AppBar, Box, Button, ButtonGroup, MenuItem, Select, Toolbar } from "@mui/material";
import { useState } from "react";

/************************************************************************************************** */

export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [name, setName] = useState(i18n.language || 'en');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <AppBar position="static" sx={{ justifyContent: 'space-around' }}>
        <Toolbar sx={{ justifyContent: 'space-evenly' }}>
            <div>
              <NavLink to="/">
                <Cloud/>
                  Weather Forecast aPP
              </NavLink>
            </div>
            <SearchBar/>

            <div>
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
                Search
              </NavLink>

              <Select
                value={name}
                label="Language"
                onChange={handleChange}
              >
                <MenuItem value="en" onClick={()=>i18n.changeLanguage("en")}>EN</MenuItem>
                <MenuItem value="es" onClick={()=>i18n.changeLanguage("es")}>ES</MenuItem>
              </Select>
            </div>
          </Toolbar>
        </AppBar>
    </Box>
  )
}
