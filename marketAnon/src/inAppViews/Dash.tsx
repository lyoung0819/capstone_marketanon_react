// import VendorSearch from "../Components/vendorsearch"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'


type DashProps = {
}

export default function Dash(): DashProps {
  return (
    <>
      <Container>
        <h1> </h1>
      </Container>
        <Row>
          <Col>
          <h3>Vendor Search</h3>
          </Col>
          <Col>
          </Col>
          <Col>
              <Button>My Profile</Button>
            </Col>
        </Row>
    </>
  )
}

// Vendor Search : <VendorSearch />
    // Go to Profile Page - button
    // My Reviews: 