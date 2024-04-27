import { useEffect, useState } from "react";
import { ReviewType, UserBuyerType, CategoryType, ReviewFormDataType } from "../types"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
//import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteReviewById, getReviewById } from '../lib/apiWrapper'

type ReviewProps = {
    review: ReviewType,
    currentUser: UserBuyerType|null
    flashMessage: (message:string, category:CategoryType) => void
}

export default function Review({ review, currentUser, flashMessage }: ReviewProps) {
    console.log(review);
    const { reviewId } = useParams();
    const navigate = useNavigate();
    

    const [reviewToEditData, setReviewtToEditData] = useState<ReviewFormDataType>({title: '', body: '', rating:0, vendor: ''})
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    
    // <USE EFFECT>
    // useEffect( () => {
    //     async function getReview(){
    //         let response = await getReviewById(reviewId!)
    //         if (response.data){
    //             const review = response.data
    //             const currentUser = JSON.parse(localStorage.getItem('currentUser')|| '{}')
    //             if (currentUser?.id !== review.author.id){
    //                 flashMessage('You do not have permission to edit this post', 'danger');
    //                 navigate('/')
    //             } else {
    //                 setReviewtToEditData({title: review.title, body: review.body, rating: review.rating, vendor: review.vendor_id})
    //             }
    //         } else if(response.error){
    //             flashMessage(response.error, 'danger');
    //             navigate('/')
    //         } else {
    //             flashMessage("Something went wrong", 'warning')
    //             navigate('/')
    //         }
    //     }
    //     getReview()
    // }, [reviewId, currentUser] )
    // </USE EFFECT>


    const handleDeleteClick = async () => {
        const token = localStorage.getItem('token') || '';
        const response = await deleteReviewById(reviewId!, token);
        if (response.error){
            flashMessage(response.error, 'danger')
        } else {
            flashMessage(response.data!, 'primary')
            navigate('/')
        }
    }
    


    return (
        <>
        <Card className='my-2' bg='dark' text='white'>
            <Card.Header>
                <Card.Title>{review.title}</Card.Title>
                <Card.Subtitle className="mb-1 text-pink">{review.author.username}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text className="">{review.body}</Card.Text>
            </Card.Body>
            <Row className='my-3' >
                <Col lg={6} className='my-3 w-50'>
                    {review.author.id === currentUser?.id && <Button >Edit Review</Button>}
                </Col>
                <Col lg={6} className='my-3 w-50'>
                    {review.author.id === currentUser?.id && <Button onClick={openModal}>Delete Review</Button>}
                </Col>
            </Row>
        </Card>
        <Modal show={showModal} onHide={closeModal} id='del-rev-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Delete {reviewToEditData.title}?</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                Are you sure you want to delete {reviewToEditData.title}? This action cannot be undone.
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={closeModal}>Close</Button>
                <Button variant='danger' onClick={handleDeleteClick}>Delete Post</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}
