import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import './App.css'
import { App } from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
   </ThemeProvider> 
  </StrictMode>,
)
