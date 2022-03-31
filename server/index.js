require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/api', require('./routes/api.route'))

app.listen(port, () => console.log(`Server alive at port ${port}`))