const express = require("express")
const axios = require("axios")
require("dotenv").config()

const router = express.Router()

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search"

router.get("/", async(req, res)=>{
    try{
        const response = await axios.get(CAT_API_URL,{
            params:{
                limit:10
            },
            headers:{

                "x-api-key": process.env.CAT_API_KEY,
            },
        })

        const cats = response.data.map(c=>({

            id: c.id,
            url: c.url,
            width: c.width,
            height: c.height
        }))

        res.json(cats)
    }catch(err){
        console.err("Error fetching cats:", err.message)
        res.status(500).json({err: "Failed to fetch cats"})
    }
}
)

module.exports = router
