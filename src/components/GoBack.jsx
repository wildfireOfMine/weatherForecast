import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const GoBack = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(-2);
  }
  return (
    <div>
      <Button variant="contained" onClick={handleButton}>Go back</Button>
    </div>
  )
}

export default GoBack
