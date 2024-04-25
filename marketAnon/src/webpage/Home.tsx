import Button from 'react-bootstrap/Button'
import logo from '../assets/malogo.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type HomeProps = {
  handleClick: () => void,
  isLoggedIn: boolean
}


export default function Home({ handleClick, isLoggedIn }: HomeProps) {
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
      <Row>
        <Button className='button' onClick={handleClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</Button>
      </Row>
    </div>
  )
}