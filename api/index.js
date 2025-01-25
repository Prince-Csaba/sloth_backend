const express = require('express')
const app = express()
const port = 8000
const indexRouter = require('../routes/index');

const route = express.Router();

//require("./database/connect");

app.use('/api', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello World of Node online2!')
})

app.get('/sloth2', (req, res) => {
  res.send('Real sloth route 🎉 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;