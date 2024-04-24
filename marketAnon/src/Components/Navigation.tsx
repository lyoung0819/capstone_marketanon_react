import { Link } from 'react-router-dom'
import logo from '../assets/malogo.png'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

type NavigationProps = {
    isLoggedIn: boolean
}

export default function Navigation({ isLoggedIn }: NavigationProps) {
    return (
        <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
            <Container>
                <Navbar.Brand><img src={logo} alt="Logo" id='navlogo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapes'>
                    <Nav className='me-auto'>
                        { isLoggedIn ? (
                            <> 
                            <Nav.Link as={Link} to='/dash'> Dashboard </Nav.Link>
                            <Nav.Link as={Link} to='/logout'> Logout </Nav.Link>
                            </>
                            ) :
                            (
                            <>
                            <Nav.Link as={Link} to='/home'> Home </Nav.Link>
                            <Nav.Link as={Link} to='/signup'> Sign Up </Nav.Link>
                            <Nav.Link as={Link} to='/login'> Login </Nav.Link>    
                            </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
    )
}