import { useEffect } from "react"
import { useState } from "react"
import { getNews } from "../../Service/News"

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
            news
        </section>
    )
}
export default News