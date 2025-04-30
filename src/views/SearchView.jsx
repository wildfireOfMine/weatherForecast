import React from 'react'
import SearchBar from '../components/SearchBar'
import { useTranslation } from 'react-i18next';

const SearchView = () => {
    const { i18n, t } = useTranslation();
  return (
    <>
        <h1>{t('looking_for_a_city')}</h1>
        <SearchBar/>
    </>
  )
}

export default SearchView
