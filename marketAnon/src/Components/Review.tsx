import { ReviewType } from "../types"
import Card from 'react-bootstrap/Card';

type ReviewProps = {
    review: ReviewType
}

export default function Review({ review }: ReviewProps){
    console.log(review)


    return (
           <Card className='my-2' bg='dark' text='white'>
            <Card.Header>
                <Card.Title>{review.title}</Card.Title>
                <Card.Subtitle className="mb-1 text-pink">{review.author.username}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text className="">{ review.body }</Card.Text>
            </Card.Body>
           </Card>
        )
    }
