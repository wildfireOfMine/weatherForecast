import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';


const SearchBar = () => {
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
    <Box>
      <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <input value={search} onChange={handleSearch} style={{ height: "20px" }}/>
        <button onClick={handleButton}> <SearchIcon sx={{ height: "20px", fontSize: "1.3em"}}/> </button>
      </form>
    </Box>
  )
}

export default SearchBar
