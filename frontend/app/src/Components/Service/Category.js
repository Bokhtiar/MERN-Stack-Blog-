import axios from "axios";

export const getCategory = async() =>{
    let category = [];

    await axios.get('/category')
    .then(response => {
        category = response.data.data
    })

    return category
}