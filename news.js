const express = require("express")
const axios = require("axios")
require("dotenv").config()

const router = express.Router()

const NEWS_API_URL = "https://newsapi.org/v2/everything"

router.get("/", async(req, res)=>{
    try{
        const response = await axios.get(NEWS_API_URL,{
            params:{
                q: "cats OR fellow OR pet cats",
                language: "en",
                sortBy: "publishedAt",
                pageSize: 10,
                apiKey: process.env.NEWS_API_KEY
            }
        })

        const news = response.data.articles.map(a=>({

            title: a.title,
            description: a.description,
            url: a.url,
            image: a.urlToImage,
            source: a.source.name,
            publishedAt: a.publishedAt
        }))

        res.json(news)
    }catch(err){
        console.err("Error fetching news:", err.message)
        res.status(500).json({err: "Failed to fetch news"})
    }
}
)

module.exports = router
