require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded())

app.use('/api', require('./routes/api.route'))

app.listen(port, () => {
    console.log(`Server alive at port ${port}`)
})