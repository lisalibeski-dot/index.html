import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx'; 
import LisaLibeskiPortfolio from './App.tsx'; 
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <LisaLibeskiPortfolio/>
  </StrictMode>,
);
