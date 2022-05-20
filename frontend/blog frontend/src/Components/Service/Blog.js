import axios from "axios";

export const getBlog = async() =>{
    let blogs = [];

    await axios.get('/blog')
    .then(response => {
        blogs = response.data.data
    })

    return blogs
}

export const showBlog = async (id) =>{
    let blog = [];
    await axios.get(`/blog/${id}`)
    .then(response => {
        blog = response.data.data
    })

    return blog
}

export const getCategoryBlog = async (name) =>{
    let categoryBlog = [];
    await axios.get(`/blog/blog/${name}`)
    .then(response => {
        categoryBlog = response.data.data
    })

    return categoryBlog
}
