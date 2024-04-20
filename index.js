require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('twitter-username')
})

app.get('/twitter/login', (req, res)=>{
    res.send("<h1>Login here</h1>")
})

app.get('/chai',(req, res) =>{
    res.send("<h2>you can get chai here</h2>")
})
console.log()
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})