import { useState } from "react"
import { useEffect } from "react"
import { Card, Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getBlog } from "./Service/Blog"
import Blogs from "./Modules/blog/Blogs"

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
             <Blogs></Blogs>
        </Container >
    )
}
export default Home