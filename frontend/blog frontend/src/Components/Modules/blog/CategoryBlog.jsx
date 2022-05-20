import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getCategoryBlog } from "../../Service/Blog"

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
            
        </section>
    )
}
export default CategoryBlog