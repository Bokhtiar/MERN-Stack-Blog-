import { useEffect } from "react"
import { useState } from "react"
import { Container,ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getCategory } from "../../Service/Category"

const Categories = () => {
    const [category, setCategory] = useState([''])

    const categoryList = async () =>{
        let serviceCategory = await getCategory()
        setCategory(serviceCategory)
    }

    useEffect(()=>{
        categoryList()
    })
    return (
        <Container>
            <ListGroup>
                {
                   category.map((cat,index)=> 
                        <ListGroup.Item> <Link to={`/category/blog/${cat.name}`} >{cat.name}</Link> </ListGroup.Item>
                   )
                }
                
            </ListGroup>
        </Container>    
    )
}
export default Categories