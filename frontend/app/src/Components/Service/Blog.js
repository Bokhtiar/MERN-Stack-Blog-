import axios from "axios";

// const api = 'your api'; 
// const token = JSON.parse(sessionStorage.getItem('data'));
// const token = user.data.id; /*take only token and save in token variable*/
// axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
// .then(res => {
// console.log(res.data);
// .catch((error) => {
//   console.log(error)
// });

const token = localStorage.getItem('token');

export const getBlog = async() =>{
    let blogs = [];

    await axios.get('/blog', { headers: {"Authorization" : `Bearer ${token}`} })
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
