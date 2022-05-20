import axios from "axios";

export const getBlog = async() =>{
    let blogs = [];

    await axios.get('/blog')
    .then(response => {
        blogs = response.data.data
    })

    return blogs
}