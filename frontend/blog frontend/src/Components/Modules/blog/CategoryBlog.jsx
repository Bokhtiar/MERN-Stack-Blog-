import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategoryBlog } from "../../Service/Blog"
import {Row, Col, Card, Container} from "react-bootstrap"

const CategoryBlog =()=>{
    const {name} = useParams()

    const [categoryBlogs, setCategoryBlogs] = useState([''])

    const categoryBlogList = async() =>{
        let serviceCategoryBlogList = await getCategoryBlog(name)
        setCategoryBlogs(serviceCategoryBlogList)
    }

    useEffect(()=>{
        categoryBlogList()
    })
    

    return (
        <section>
            <Container>
            <Row>
               {
                   categoryBlogs.map((blog, index)=>
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
            </Container>
        </section>
    )
}
export default CategoryBlog