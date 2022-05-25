import { useEffect } from "react"
import { useState } from "react"
import { getNews } from "../../Service/News"
import {Container, Row, Col, Card} from 'react-bootstrap'
import { Link } from "react-router-dom"

const News = () => {
    const [news, setNews] = useState([''])
    const serviceNews = async () => {
        let newsList = await getNews()
        setNews(newsList)
    }

    useEffect(()=>{
        serviceNews()
    },[])
    
    return (
        
        <section>
            <Container>
                <Row>
                {
                    news.map((n, index)=>
                    <Col className="my-3" sm={6} lg={3} md={3}>
                            <Card style={{ width: '16rem' }}>
                                <Card.Img style={{ height:'150px' }} variant="top" src={ n.image } />
                                <Card.Body>
                                    <Card.Title>{n.title}</Card.Title>
                                    <Link to={`/blog/${n._id}`} variant="primary">view</Link>
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
export default News