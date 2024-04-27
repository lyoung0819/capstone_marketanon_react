import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { UserBuyerType, ReviewType, CategoryType } from '../types'
import { useEffect, useState } from 'react'
import { getReviewById } from '../lib/apiWrapper'
import Review from '../components/Review'

type UserprofileProps = {
  currentUser: UserBuyerType|null,
//  flashMessage: (newMessage: string | undefined, newCategory: CategoryType | undefined) => void
}

export default function Userprofile({ currentUser }: UserprofileProps) {
  const username = currentUser?.username
  const title = currentUser?.title
  const company = currentUser?.company
  const name = currentUser?.firstName
  const user_id = currentUser?.id
  const [reviews, setReviews] = useState<ReviewType[]>([])

  useEffect(() => {
      async function fetchData() {
        const response = await getReviewById(user_id!); 
        console.log(response.data)
        if (response.data) {
          let reviews = response.data;
          setReviews(reviews)
        }
      }
      fetchData()
    }, []) 

  return (
    <>
    <Row>
      <Col className='mt-5'>
      <h1 className='text-pink'>{username}</h1>
      </Col>
    </Row>
    <Row>
      <img></img>
      <h3>{title}</h3>
      <h3>{company}</h3>
    </Row>
    <Row className='mt-4'>
        <Card bg='dark' text='white'>
              <Card.Header>
                <h3>Hello, {name}. Welcome Back!</h3>
              </Card.Header>
        </Card>
    </Row>
    <Row>
    {reviews.map(r => <Review key={r.id} review={r} />)}
    </Row>
    </>
  )
}