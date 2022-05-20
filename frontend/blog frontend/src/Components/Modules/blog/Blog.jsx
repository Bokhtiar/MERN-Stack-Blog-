import { useParams } from "react-router-dom"
import {Container, Image, Row, Col} from 'react-bootstrap'
import { showBlog } from "../../Service/Blog";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState([''])

    const singleBlog = async () =>{
        let sblog = await showBlog(id)
        setBlog(sblog)
    }
    useEffect(()=>{
        singleBlog()
    },[])

    return (
        <Container>
           <Row>
               <Col md={8} lg={8} sm={12}>
                    <h1>Blog Details { blog.title}</h1> 
                    <Image src={blog.image} ></Image>

                    <h1>{blog.title}</h1>
                    <p>
                        {blog.description}
                    </p>
               </Col>

               <Col md={4} lg={4} sm={12}>
                
               </Col>
           </Row>
        </Container>
    )
}
export default  Blog