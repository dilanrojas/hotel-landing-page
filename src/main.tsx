import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { FavouriteContextProvider } from './context/favourite-context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavouriteContextProvider>
        <App />
      </FavouriteContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
