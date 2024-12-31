// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

// This is for Turbo Rails
import "@hotwired/turbo-rails"
import "controllers"

// Create the root for React
document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  )
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
