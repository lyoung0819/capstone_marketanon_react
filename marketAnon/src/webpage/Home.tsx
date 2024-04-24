import Button from 'react-bootstrap/Button'

type HomeProps = {
  handleClick: () => void,
  isLoggedIn: boolean
}


export default function Home({ handleClick, isLoggedIn } :HomeProps) {
  return (
    <>
    <div>Home</div>
    <Button variant='primary' onClick={handleClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</Button>
    </>
  )
}