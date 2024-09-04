import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando o Provider */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
)
