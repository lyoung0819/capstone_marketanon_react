import { VendorType } from "../types"
import Card from 'react-bootstrap/Card';

type VendorProps = {
    vendor: VendorType
}

export default function Review({ vendor }: VendorProps){
    console.log(vendor)


    return (
           <Card className='my-2' bg='dark' text='white'>
            <Card.Header>
                <Card.Title>{vendor.name}</Card.Title>
            </Card.Header>
           </Card>
        )
    }
