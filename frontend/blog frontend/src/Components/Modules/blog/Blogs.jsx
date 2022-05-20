import { useEffect } from "react"
import { useState } from "react"
import {Card,Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { getBlog } from "../../Service/Blog"

const Blogs = () => {
    const [blog, setBlog] = useState([''])

    const BlogList = async()=>{
        let serviceBlog = await getBlog()
        setBlog(serviceBlog)
    }

    useEffect(()=> {
        BlogList()
    },[])
    
    return (
        <div>
            <Row>
               {
                   blog.map((blog, index)=>
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
        </div>
    )
}
export default  Blogs