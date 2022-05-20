import { useState } from "react"
import { useEffect } from "react"
import { Card, Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getBlog } from "./Service/Blog"

const Home = () =>{
    const [blogs, setblog] = useState([''])

    const blogList = async ()=>{
        let serviceBlogs = await getBlog()
        setblog(serviceBlogs)
    }//list of service blog

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
                                <Link to={`/blog/${blog._id}`} variant="primary">view</Link>
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