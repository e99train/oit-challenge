'use strict'
const express = require('express')
const port = 8080
const tmdb = require('./routes/tmdb')
const cors = require("cors")

;(async () => {
  const app = express()

  app.use(cors())

  app.get('/', (req, res) => res.send('Hello World!'))

  app.get('/movies', async (req, res) => {
    res.send(await tmdb.searchMovies(req, res))
  })

  app.get('/movie/:id', async (req, res) => {
    res.send(await tmdb.getMovie(req, res))
  })

  app.listen(port, () => console.log(`Server listening on port ${port}!`))
})()
