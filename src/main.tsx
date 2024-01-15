import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginPage from './Login.tsx'
import RegisterPage from './Register.tsx'
import FeedPage from './Feed.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FeedPage />
  </React.StrictMode>,
)


