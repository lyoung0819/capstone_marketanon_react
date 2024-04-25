import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//bring in current user to display username
//display THEIR reviews
type UserprofileProps = {}

export default function Userprofile({}: UserprofileProps) {

  //useEffect calling getMe()


  return (
    <>
    <Row>
      <Col className='mt-5'>
      <h1 className='text-pink'>Username</h1>
      </Col>
    </Row>
    <Row>
      <img></img>
      <h1>Profile Pic</h1>
    </Row>
    <Row className='mt-4'>
        <Card bg='dark' text='white'>
              <Card.Header>
                <h3>User's Name</h3>
                <Card.Subtitle> User's Company & Job Title</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>User's Review 1</p>
                  <p>User's Review 2</p>
                  <p>User's Review 3</p>
                  <p>User's Review 4</p>
                </Card.Text>
              </Card.Body>
        </Card>
    </Row>

    </>
  )
}