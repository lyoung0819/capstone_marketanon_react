import { VendorType } from "../types"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

type VendorProps = {
    vendor: VendorType
}

export default function Vendor({ vendor }: VendorProps){
    console.log(vendor)


    return (
           <Card className='my-2' bg='dark' text='white'>
            <Card.Header>
                <Card.Title as={Link} to='/vendor'>{vendor.companyName}</Card.Title>
            </Card.Header>
           </Card>
        )
    }


    // flask /reviews/<compnay_name>
    // /reviews/<int:user_id>