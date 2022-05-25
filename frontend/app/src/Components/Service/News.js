import axios from "axios";

export const getNews = async() =>{
    let news = [];

    await axios.get('/news')
    .then(response => {
        news = response.data.data
    })

    return news
}