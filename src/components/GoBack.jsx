import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const GoBack = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  

  const handleButton = () => {
    navigate(-1);
  }
  return (
    <div>
      <Button variant="contained" onClick={handleButton}>{t('go_back')}</Button>
    </div>
  )
}

export default GoBack
