const express = require("express")
const axios = require("axios")
require("dotenv").config()

const router = express.Router()

router.get("/", async(req, res)=>{
    try{
        const catApiKey = process.env.CAT_API_KEY
        const newsApiKey = process.env.NEWS_API_KEY

        const breedsReq = axios.get("https://api.thecatapi.com/v1/breeds",{
            headers:{"x-api-key": catApiKey}
        })
        const localCatsReq= axios.get("https://api.thecatapi.com/v1/images/search",{
            params:{ limit: 10 },
            headers:{"x-api-key": catApiKey}
        }) 
        const wildCatsReq = Promise.all(
            ["Lion", "Tiger", "Leopard", "Cheetah", "Jaguar", "Snow Leopard"].map(name=>
                axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`)
            )
        )
        const newsReq = axios.get("https://newsapi.org/v2/everything", {
            params:{
                q: "cats OR feline OR pet cats",
                language: "en",
                pageSize: 10,
                apiKey: newsApiKey
            }
        })

        const [breedsRes, localCatsRes, wildCatsRes, newsRes] = await Promise.all([
            breedsReq, localCatsReq, wildCatsReq, newsReq
        ])

        res.json({
            breeds: breedsRes.data.map(b=>({
                id: b.id,
                name: b.name,
                origin: b.origin,
                image: b.image?.url || null
            })),
            localCats: localCatsRes.data.map((c,i)=>({
                id: c.id || i,
                url: c.url
            })),
            wildCats: wildCatsRes.map(r=>({
                title: r.data.title,
                description: r.data.extract,
                image: r.thumbnail?.source || null
            })),
            news: newsRes.data.articles.map(a=>({
                title: a.title,
                url: a.url,
                source: a.source.name
            }))
        })
    }catch(err){
        console.error("Error fetching cats data:", err.message)
        res.status(500).json({err: "Failed to fetch cats data"})
    }
}
)

module.exports = router
