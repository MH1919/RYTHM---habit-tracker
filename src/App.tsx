import React from 'react';
import './App.css'
import Sidebar from './components/sidebar'
import MainContent from './components/MainContent'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <MainContent />
    </>
  )
}

export default App
