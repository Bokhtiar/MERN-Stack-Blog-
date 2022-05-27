import axios from 'axios'
import { useState } from 'react'
import {Form,Container,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        'email' : '',
        'password' : '',
    })
    const LoginHandle = (e) =>{
        e.persist();
        setUser({...user,[e.target.name]: e.target.value})
    }

    const Login = (e) => {
        e.preventDefault();
        axios.post('/user/login', {
            'email' : user.email,
            'password' : user.password,
          })
          .then(function (response) {
                console.log('res', response)
                localStorage.setItem('token', response.data.token);
                navigate("/user/dashboard")  
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <section>
            <Container>
                <h2>Login Form</h2>
                <Form onSubmit={Login}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' onChange={LoginHandle} value={user.email} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' onChange={LoginHandle} value={user.password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Login </Button>
                </Form>
            </Container>
        </section>
    )
}
export default Login