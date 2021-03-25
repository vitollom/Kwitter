import { useState, useEffect } from "react"
import { Form, Button} from 'react'
import { getUser, patchUser } from '../fetchRequests'


function User ({ match }) {
 const [user, setUser] = useState({})
 const [displayName, setDisplayName] = useState('')
 const [about, setAbout] = useState('')
 

  useEffect(() => {
    getUser(match.params.profile)
     .then((data) => {
       setUser(data.user)
       setDisplayName(data.user.displayName)
       setAbout(data.user.about)
     })
}, [match])



 return (
   <div>
     <div>User: { user.profile } </div>
     <p> About Me: </p>
     <p>{ user.about }</p>

     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>About</Form.Label>
    <Form.Control onChange={(e) => setAbout(e.target.value)} value={about} type="text" placeholder="About me..." />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Display Name</Form.Label>
    <Form.Control onChange={(e) => setAbout(e.target.value)} value={displayName} type="text" placeholder="My name"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

   </div>
   
 )
 
 }
 export default User