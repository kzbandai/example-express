const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/foo', (req, res) => {
  res.send('Hello Foo!')
})

app.get('/bar', (req, res) => {
  res.send('Hello Bar!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
