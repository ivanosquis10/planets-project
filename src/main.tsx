import { createRoot } from 'react-dom/client'
import { PlanetProvider } from './context'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <PlanetProvider>
    <App />
  </PlanetProvider>
)
