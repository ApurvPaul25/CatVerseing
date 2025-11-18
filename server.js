require("dotenv").config()
const express =  require("express");
const cors = require("cors");

const catRoutes = require("./routes/cats")
const breedsRoutes = require("./routes/breeds")
const localCatsRoutes = require("./routes/localCats")
const wildCatsRoutes = require("./routes/wildCats")
const newsRoutes = require("./routes/news")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/cats", catRoutes)
app.use("/api/breeds", breedsRoutes)
app.use("/api/localcats",localCatsRoutes)
app.use("/api/wildcats", wildCatsRoutes)
app.use("/api/news", newsRoutes)


const PORT = 5000
app.listen(PORT, ()=> console.log(`Cat Backend running on port ${PORT}`))