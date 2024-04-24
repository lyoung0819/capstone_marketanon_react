// import Dash from './inAppViews/Dash'

import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navigation from './Components/Navigation';
import Button from 'react-bootstrap/Button';


export default function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let reviews: {id:number, title:string, body:string, date_created:string, userbuyer_id:number, vendor_id:number}[] = []
  
  const handleClick = () => {
    // console.log('The button has been clicked.')
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <>
    <Navigation isLoggedIn={isLoggedIn}/>
    <Container>
        <Button variant='primary' onClick={handleClick}>Log In</Button>
    </Container>
    </>
  )
}