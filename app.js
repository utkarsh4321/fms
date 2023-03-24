const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('utkarsh are you doing great!Keep going')
})
app.get('/blog', (req, res) => {
  res.send('All the blog written by ut')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
