import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Dash from './views/Dash'
import Home from './webpage/Home'
import Navigation from './components/Navigation';
import Signup from './webpage/Signup';
import Container from 'react-bootstrap/Container'


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  const handleClick = () => {
    // console.log('The button has been clicked.')
    setIsLoggedIn(!isLoggedIn)
  }
  

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Container>
        <Routes>
          <Route path='/' element={<Dash isLoggedIn={isLoggedIn} />}  />
          <Route path='/' element={<Signup />} />
          <Route path='/' element={<Home handleClick={handleClick} isLoggedIn={isLoggedIn} />} />
        </Routes>
      </Container>
    </>
  )
}