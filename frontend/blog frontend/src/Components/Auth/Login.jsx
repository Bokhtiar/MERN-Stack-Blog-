import axios from 'axios'
import { useState } from 'react'
import {Form,Container,Button} from 'react-bootstrap'


const Login = () => {
    const [user, setUser] = useState({
        'email' : '',
        'password' : '',
    })
    const LoginHandle = (e) =>{
        e.persist();
        setUser({...user,[e.target.name]: e.target.value})
    }

    const Login = (e,replace) => {
        e.preventDefault();
        axios.post('/login', {
            'email' : user.email,
            'password' : user.password,
          })
          .then(function (response) {
            console.log(response.data.data.role)
            if(response.data.data.role === 'user'){

            }else{
                
            }
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('password', response.data.user.password);
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