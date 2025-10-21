const express = require("express")
const axios = require("axios")
require("dotenv").config()

const router = express.Router()

const CAT_API_URL = "https://api.thecatapi.com/v1/breeds"
const CAT_API_KEY = process.env.CAT_API_KEY

router.get("/", async(req, res)=>{
    try{
        const response = await axios.get(CAT_API_URL,{
            headers:{

                "x-api-key": CAT_API_KEY,
            },
        })

        const breeds = response.data.map(b=>({

            id: b.id,
            name: b.name,
            origin: b.origin,
            temperament: b.temperament,
            description: b.description,
            image: b.image?.url || null,
        }))

        res.json(breeds)
    }catch(err){
        console.err("Error fetching breeds:", err.message)
        res.status(500).json({err: "Failed to fetch breeds"})
    }
}
)

module.exports = router
