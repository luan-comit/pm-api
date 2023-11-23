const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`PM01 app listenning at http://localhost: ${port}`)
})