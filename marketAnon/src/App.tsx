// import Dash from './inAppViews/Dash'

import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Navigation from './Components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Review = {
  id: number,
  title: string,
  body: string,
  date_created: string,
  userbuyer_id: number,
  vendor_id: number
}

type Sorting = {
  idAsc: (a: Review, b: Review) => number,
  idDsc: (a: Review, b: Review) => number
}


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      title: 'MarketAnon Rules!',
      body: 'I love MarketAnon because I built it',
      date_created: '08/04/2024',
      userbuyer_id: 1,
      vendor_id: 2
    },
    {
      id: 2,
      title: 'I love McDonalds!',
      body: 'fries yum',
      date_created: '08/04/2024',
      userbuyer_id: 2,
      vendor_id: 6
    }
  ])

  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    // console.log('The button has been clicked.')
    setIsLoggedIn(!isLoggedIn)
  }
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    const sortFunctions: Sorting = {
      idAsc: (a: Review, b: Review) => a.id - b.id,
      idDsc: (b: Review, a: Review) => b.id - a.id
    }
    const func = sortFunctions[e.target.value as keyof Sorting];
    const newSortedArr = [...reviews].sort(func);
    setReviews(newSortedArr)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Container>
        <Button variant='primary' onClick={handleClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</Button>
        <Row>
          <Col xs={12} md={8}>
            <Form.Control value={searchTerm} placeholder='Search Reviews' onChange={handleInputChange}/>
          </Col>
          <Col>
            <Form.Select onChange={handleSelectChange}>
              <option value="idAsc">By Newest</option>
              <option value="idDsc">By Oldest</option>
            </Form.Select>
          </Col>
        </Row>
        {reviews.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase())).map(r => <h4 key={r.id}>{r.title}</h4>)}
      </Container>
    </>
  )
}