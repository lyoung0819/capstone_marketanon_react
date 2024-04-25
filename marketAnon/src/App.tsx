import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Dash from './views/Dash'
import Home from './webpage/Home'
import Vendorpage from './views/Vendorpage';
import Login from './webpage/Login';
import Userprofile from './views/Userprofile';
import Navigation from './components/Navigation';
import Signup from './webpage/Signup';
import Container from 'react-bootstrap/Container'
import AlertMessage from './components/AlertMessage'
import { UserBuyerType, CategoryType } from './types' 
import Logout from './views/Logout';
import Roadmap from './webpage/Roadmap';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')||0) > new Date() ? true : false);
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
      <Navigation isLoggedIn={isLoggedIn} />
      <Container>
        {message && <AlertMessage message={message} category={category} flashMessage={flashMessage}/>}
        <Routes>
          <Route path='/dash' element={<Dash logUserOut={logUserOut}/>}  />
          <Route path='/signup' element={<Signup flashMessage={flashMessage}/>} />
          <Route path='/' element={<Home handleClick={handleClick} isLoggedIn={isLoggedIn} />} />
          <Route path='/vendor' element={<Vendorpage />} />
          <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn}/>} />
          <Route path='/myprofile' element={<Userprofile />} />
          <Route path='/logout' element={<Logout logUserOut={logUserOut} />} />
          <Route path='/roadmap' element={<Roadmap />} />
       </Routes>
      </Container>
    </>
  )
}