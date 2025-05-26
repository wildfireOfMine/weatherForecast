import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';


const SearchBar = ({size="small", colour="white", width="0.6em", fillColour="white"}) => {
    const { i18n, t } = useTranslation();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleButton = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`)
    }
    
  return (
    <Box sx={{
      textAlign: "center",
      margin: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
        <TextField
        id="search-bar"
        className="text"
        label={t("enter_a_city_name")}
        value={search}
        onChange={handleSearch}
        variant="outlined"
        placeholder={t("search_inside_bar")}
        size={size}
        onKeyDown={(e)=>{
          e.key === "Enter" && handleButton(e);
        }}
        sx={{
          fontSize:"99em",
          width: width,
          '& .MuiInputBase-root': {
            color: colour,
            borderColor: colour,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colour,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colour,
          },
          '& .MuiInputLabel-root': {
            color: colour,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: colour,
          },
          '& .MuiOutlinedInput-input::placeholder': {
            color: colour,
            opacity: 0.5,
          },
        }}
      />
      <IconButton type="submit" aria-label="search" onClick={handleButton}>
        <SearchIcon sx={{ fill: fillColour }} />
      </IconButton>
    </Box>
  )
}

export default SearchBar
