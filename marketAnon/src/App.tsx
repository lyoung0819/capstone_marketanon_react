import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Dash from './views/Dash'
import Home from './webpage/Home'
import Navigation from './components/Navigation';
import Signup from './webpage/Signup';
import Container from 'react-bootstrap/Container'
import AlertMessage from './components/AlertMessage'
import { UserBuyerType, CategoryType } from './types' 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInUser, setisLoggedInUser] = useState<UserBuyerType|null>(null)

  const [message, setMessage] = useState<string|undefined>(undefined)
  const [category, setCategory] = useState<CategoryType|undefined>(undefined)

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const flashMessage = (newMessage:string|undefined, newCategory:CategoryType|undefined) => {
    setMessage(newMessage);
    setCategory(newCategory);
  }

  const logUserIn = () => {
    setIsLoggedIn(true)
}

  const logUserOut = () => {
    setIsLoggedIn(false);
    setisLoggedInUser(null);
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExp')
    flashMessage('You have been logged out', 'dark')
  }

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} logUserOut={logUserOut} />
      <Container>
        {message && <AlertMessage message={message} category={category} flashMessage={flashMessage}/>}
        <Routes>
          <Route path='/dash' element={<Dash />}  />
          <Route path='/signup' element={<Signup flashMessage={flashMessage}/>} />
          <Route path='/home' element={<Home handleClick={handleClick} isLoggedIn={isLoggedIn} />} />
        </Routes>
      </Container>
    </>
  )
}