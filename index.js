const express = require("express")
const app = express()
const cors = require('cors')
http://DESKTOP-AC29AFH.localhost:8080
app.use(express.static('public'))
app.use(cors())
app.use(express.json())

app.listen(8080, () => {
    console.log("funciona")
})