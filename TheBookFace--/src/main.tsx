import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginPage from './login.tsx'
import RegisterPage from './register.tsx'
import FeedPage from './Feed.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FeedPage />
  </React.StrictMode>,
)
