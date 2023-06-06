import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        
        <Route path='*' element={<p>Page Not found</p>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
