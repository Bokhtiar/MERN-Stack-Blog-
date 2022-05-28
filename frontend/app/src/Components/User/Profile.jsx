import { useEffect } from 'react'
import { useState } from 'react'
import {Container, Card} from 'react-bootstrap'
import { getUser } from '../Service/Profile'

const UserProfile = () => {

    const [user, setUser] = useState()
    const UserInfo = async () => {
        let data = await getUser()
        setUser(data)
        console.log(data)
    }

    useEffect(()=>{
        UserInfo()
    }, [])

    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <Card>
                    <Card.Body>
                        <Card.Title>User Profile</Card.Title>
                        <Card.Text>
                        
                            <p>Name is : {user ? user.name : 'null'}</p>
                            <p>E-mail is : {user ? user.email : 'null'}</p>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </div>
           
        </Container>
    )
}
export default  UserProfile