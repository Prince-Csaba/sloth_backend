const express = require('express')
const { default: sendOfferDetailsEmail } = require('./email/sendEmail')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World of Node online!')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.get('/email', (req, res) => {
  res.send('Email route 🎉 ')
})

app.get('/sloth2', (req, res) => {
  res.send('Real sloth route 🎉 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;