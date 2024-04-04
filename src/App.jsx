
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './routes/MainPage.jsx'
import Login from './routes/Login.jsx'

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login />
  }
  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
