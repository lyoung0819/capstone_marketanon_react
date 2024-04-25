import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { ReviewFormDataType} from '../types'
import { ReviewType } from '../types'
import Form from 'react-bootstrap/Form';
import Review from '../components/Review'
//import ReviewForm from '../components/ReviewForm'
import { getAllReviews } from '../lib/apiWrapper';

// SORTING TYPE
type Sorting = {
  idAsc: (a: ReviewType, b: ReviewType) => number,
  idDsc: (a: ReviewType, b: ReviewType) => number
}

type VendorPageProps = {}
export default function Vendorpage({ }: VendorPageProps) {


  //Show create review form 
  const [showForm, setShowForm] = useState(false)
  const [reviews, setReviews] = useState<ReviewType[]>([])

  // Grab reviews from db
  useEffect(() => {
    async function fetchData() {
      const response = await getAllReviews();
      console.log(response)
      if (response.data) {
        let reviews = response.data;
        setReviews(reviews)
      }
    }
    fetchData()
  }, [])




  // SEARCH TERM & STATE FOR FILTERING THRU REVS

  const [searchTerm, setSearchTerm] = useState('');
  // SORTING FUNCTION FOR SORTING REVS
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortFunctions: Sorting = {
      idAsc: (a: ReviewType, b: ReviewType) => a.id - b.id,
      idDsc: (b: ReviewType, a: ReviewType) => b.id - a.id
    }
    const func = sortFunctions[e.target.value as keyof Sorting];
    const newSortedArr = [...reviews].sort(func);
    setReviews(newSortedArr)
  }
  // SEARCH FUNCTION FOR SEARCHING REVS
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  // ADD NEW REVIEW
  // const addNewReview = (newReviewData: ReviewFormDataType) => {
  //   const author = { id: 2, firstName: 'Jane', lastName: 'Doe', username: 'Jdoee', email: 'jd@fake.com' }
  //   let vendor_id = 1
  //   const newReview: ReviewType = { ...newReviewData, id: reviews.length + 1, date_created: new Date().toString(), author, vendor_id }
  //   setReviews([...reviews, newReview])
  // }
  // // ------

  return (
    <>
      <Row classname="mb-3">
        <Col xs={12} md={8}>
          <Form.Control value={searchTerm} placeholder='Search Reviews' onChange={handleInputChange} />
        </Col>
        <Col>
          <Form.Select onChange={handleSelectChange}>
            <option value="idAsc">By Newest</option>
            <option value="idDsc">By Oldest</option>
          </Form.Select>
        </Col>
        <Col>
          <Button className='w-100 button' onClick={() => setShowForm(!showForm)}>{showForm ? 'Close' : 'Write Review'}</Button>
        </Col>
      </Row>
      {/* {showForm && <ReviewForm addNewReview={addNewReview} />} */}
      <Row>
        {reviews.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase())).map(r => <Review key={r.id} review={r} />)}
      </Row>
    </>
  )
}