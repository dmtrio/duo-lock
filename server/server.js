const path = require('path')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))//res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
