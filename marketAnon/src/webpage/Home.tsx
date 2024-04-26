import logo from '../assets/malogo.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


// Home Webpage: Essentially pure HTML for our homepage

type HomeProps = {}

export default function Home({}: HomeProps) {
  return (
    <div>
      <Row className='my-5'>
        <Col id='logo-parent'>
          <img src={logo} alt="Logo" id="home-logo" className='responsive' />
        </Col>
      </Row>
      <Row id='slogan-right' className='my-5'>
        <h5 className="text-center home-pink">Built for the decision maker.</h5>
      </Row>
      {/* <Row>
        <Button className='button' onClick={handleClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</Button>
      </Row> */}
      <Row className="text-center my-5">
        <h4>How It Works</h4>
      </Row>
      <Row>
        <Col lg={3}>
          <Card bg='dark' text='white' border="light" >
          <Card.Header><h6 className='text-center'> Procurement Teams</h6>
                </Card.Header>
          </Card>
        </Col>
        <Col lg={3}>
        <Card bg='dark' text='white' border="light">
        <Card.Header><h6 className='text-center'> Procurement Teams</h6>
                </Card.Header>
          </Card>
          </Col>
        <Col lg={3}>
        <Card bg='dark' text='white' border="light">
        <Card.Header><h6 className='text-center'> Procurement Teams</h6>
                </Card.Header>
          </Card>
        </Col>
        <Col lg={3}>
        <Card bg='dark' text='white' border="light">
              <Card.Header><h6 className='text-center'> Procurement Teams</h6>
                </Card.Header>
          </Card>
          </Col>
      
      </Row>
    </div>
  )
}