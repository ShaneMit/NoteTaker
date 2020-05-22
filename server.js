const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, 'public/notes.html'))
})

app.get('*', (req,res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})



app.listen(3000, () => console.log('http://localhost:3000'))