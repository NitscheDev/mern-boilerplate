require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path')

//Middlewere's
app.use(express.json())
app.use(express.urlencoded())

//Api Routes
app.use('/api', require('./routes/api.route'))

//Serve frontend - In production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    //catch all(*) routes after the api routes and serve the client index.html
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    })
}

//Start express server
app.listen(port, () => console.log(`Server alive at port ${port}`))