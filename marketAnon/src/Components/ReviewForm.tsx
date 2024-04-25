import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ReviewFormDataType } from '../types';

type ReviewFormProps = {
    addNewReview: (data: ReviewFormDataType) => void
}


export default function PostForm({ addNewReview }: ReviewFormProps) {
   const [newReview, setNewReview] = useState<ReviewFormDataType>({title: '', body: ''}) 
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value);
        setNewReview({...newReview, [event.target.name]:event.target.value })
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewReview(newReview)
    }

    return (
    <Card className='my-3'>
        <Card.Body>
            <h3 className='text-center'>Create New Review</h3>
            <Form onSubmit={handleFormSubmit}> 
                <Form.Label>Title:</Form.Label>
                <Form.Control name='title' value={newReview.title} onChange={handleInputChange} />
                <Form.Label>Review:</Form.Label>
                <Form.Control name='body' value={newReview.body} onChange={handleInputChange} />
                <Button className='mt-3 w-100 button' type='submit'>Create Post</Button>
            </Form>
        </Card.Body>
    </Card>
  )
}