import express from 'express';
import {pieRoutes} from "./src/api/pies.js";


const app = express()
const port = 30001



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(pieRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
