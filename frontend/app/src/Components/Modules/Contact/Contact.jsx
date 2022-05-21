import axios from 'axios'
import { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const [contact , setContact] = useState({
        "name" : '',
        "email" : '',
        "message" : '',
    })

    const ContactHandle = (e) => {
        e.persist();
        setContact({...contact,[e.target.name]: e.target.value})
    }
    const ContactSubmit = (e) => {
        e.preventDefault();
        axios.post('/contact', {
            'email' : contact.email,
            'name' : contact.name,
            'message' : contact.message
          })
          .then(function (response) {
            console.log(response)
            navigate("/")  
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <section>
            <Container>
                <Form onSubmit={ContactSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={ContactHandle} value={contact.email} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={ContactHandle} value={contact.name} name='name' type="name" placeholder="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control onChange={ContactHandle} value={contact.message} name='message' as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    )
}
export default Contact