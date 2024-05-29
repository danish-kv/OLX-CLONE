import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseContext } from './store/FirebaseContext'
import firebase from './firebase/config'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{firebase}}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
