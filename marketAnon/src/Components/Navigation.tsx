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
                <Navbar.Brand href='/'><img src={logo} alt="Logo" id='navlogo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapes'>
                    <Nav className='me-auto'>
                        { isLoggedIn ? (
                            <> 
                            <li> Dashboard </li>
                            <li> Logout </li>
                            </>
                            ) :
                            (
                            <>
                            <li> Home </li>
                            <li> Sign Up </li>
                            <li> Login </li>    
                            </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
    )
}