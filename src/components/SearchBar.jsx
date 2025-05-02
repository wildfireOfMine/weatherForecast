import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


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
    <div>
      <form>
        <input value={search} onChange={handleSearch}/>
        <button onClick={handleButton}> <SearchIcon/> </button>
      </form>
    </div>
  )
}

export default SearchBar
