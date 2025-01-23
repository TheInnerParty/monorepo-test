const express = require('express')
const app = express()
const port = 3000

const pieRoutes = require('./src/api/pies')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(pieRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
