const express = require("express")
const axios = require("axios")
require("dotenv").config()

const router = express.Router()

const wildCatNames = [
    "Lions",
    "Tiger",
    "Leopards",
    "Cheetah",
    "Snow Leopard",
    "Jaguar",
    "Puma"
]

router.get("/", async(req, res)=>{
    try{
        const requests = wildCatNames.map(name=> 
            axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`)
        )

        const results = await Promise.all(requests)
        const wildCats = results.map(r=>({

            title: r.data.title,
            description: r.data.extract,
            image: r.data.thumbnail?.source || null,
            url: r.data.content_urls?.desktop?.page,

        }))

        res.json(wildCats)
    }catch(err){
        console.err("Error fetching wild cats:", err.message)
        res.status(500).json({err: "Failed to fetch wild cats"})
    }
}
)

module.exports = router
