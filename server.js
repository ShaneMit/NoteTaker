const express = require('express')
const { join } = require('path')
const app = express()
const database = require('./db/db.json')
idCount = 1

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/notes', (req, res) => {
  console.log('Hello')
  res.sendFile(join(__dirname, 'public/notes.html'))
})

app.get('/api/notes', (req, res) => {
  console.log('notes')
  return res.status(200).json(database)
})

app.post('/api/notes', (req, res) => {
  let noteData = req.body
  req.body.id = idCount
  idCount++
  database.push(noteData)
  return res.status(201).json(database)
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id
})

app.get('*', (req,res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

// app.get('/api/notes', (req, res) => {
//   console.log('notes')
// return  res.status(200).json(database)

// })
// console.log('Hello World')

app.listen(3000, () => console.log('http://localhost:3000'))