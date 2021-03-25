import { useState, useEffect } from "react"
import { Form, Button} from 'react'
import { getUser, patchUser } from '../fetchRequests'


function User ({ match }) {
 const [user, setUser] = useState({})

  useEffect(() => {
    getUser(match.params.profile)
     .then((data) => {
       setUser(data.users)
     })
  })
}


 return (
   <div>
     <div>User: { user.profile } </div>
     <p> About Me: </p>
     <p>{ user.about }</p>



     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>About</Form.Label>
    <Form.Control type="text" placeholder="About me..." />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Display Name</Form.Label>
    <Form.Control type="text" placeholder="first name"/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="123abc" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

   </div>
   
 )
 

 export default User