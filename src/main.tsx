import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hooks/scroll-to-top'
import App from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <ScrollToTop />
      <App />

    </BrowserRouter>
  </StrictMode>,
)
