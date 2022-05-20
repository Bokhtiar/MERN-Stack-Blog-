import { useState } from "react"
import { useEffect } from "react"
import { Card, Button, Container, Col, Row } from "react-bootstrap"
import { getBlog } from "./Service/Blog"

const Home = () =>{
    const [blogs, setblog] = useState([''])
    const blogList = async ()=>{
        let serviceBlogs = await getBlog()
        setblog(serviceBlogs)
    }//list of blog
    useEffect (()=>{
        blogList()
    },[])

    return(
        <Container >
           <Row>
               {
                   blogs.map((blog, index)=>
                   <Col className="my-3" sm={6} lg={3} md={3}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img style={{ height:'150px' }} variant="top" src={ blog.image } />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                   )
               }
           </Row>   
        </Container >
    )
}
export default Home