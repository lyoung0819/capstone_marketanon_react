// Vendor Search : <VendorSearch />
// Go to Profile Page - button


import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { VendorType } from '../types'
import Vendor from '../components/Vendor'


// DASH PROPS
type DashProps = {
  logUserOut: () => void
}

// DASH FUNCTION 
export default function Dash({ }: DashProps) {
  // ------
  const [vendors, setVendors] = useState<VendorType[]>([
    { id: 1, name: 'Zscaler' },
    { id: 2, name: 'CrowdStrike' },
    { id: 3, name: 'Rubrik' }
  ])

  // search default set as empty string
  const [searchVendors, setSearchVendors] = useState('')

  // function to search thru list 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearchVendors(e.target.value)
  }


  // OUTPUT
  return (
    <>
      <Row>
        <Col xs={12} md={12}>
          <Form.Control value={searchVendors} placeholder='Search Vendors:' onChange={handleInputChange} />
        </Col>
        <Col>
          {vendors.filter(v => v.name.toLowerCase().includes(searchVendors.toLowerCase())).map(v => <Vendor key={v.id} vendor={v} />)}
        </Col>
      </Row>
    </>
  )
}

