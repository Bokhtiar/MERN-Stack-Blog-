import axios from "axios";

const token = localStorage.getItem('token');

export const getUser = async() =>{
    let data = [];

    await axios.get('/user/logdinUser', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(response => {
        data = response.data.data
    })

    return data
}
