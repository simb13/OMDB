const express = require('express');
const router = express.Router();

const axios = require('axios');

const OMDB_API_KEY = "ad8f3fd2";
const OMDB_URL =  "http://www.omdbapi.com/"

router.get('/search', (req, res, next) => {
  const title = req.query.title
  const page = req.query.page
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}&page=${page}`
  console.log(url)

  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
