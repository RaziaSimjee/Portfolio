import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins/700.css'; // for bold weight
import '@fontsource/montserrat/700.css';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/inter/400.css';

import './index.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeScreen />
  </StrictMode>,
)
