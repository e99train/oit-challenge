const tmdbService = require('../services/tmdb')
const moviesProcess = require('../process/movies')

exports.searchMovies = async (req, res) => {
  const { search } = req.query
  console.log('Searching for movies with query:', search)
  const data = await tmdbService.searchTmdbMovies(search)
  if (!data) {
    return res.status(500).send('Error')
  }
  return moviesProcess.processMovies(data)
}

exports.getMovie = async (req, res) => {
  const { id } = req.params
  const data = await tmdbService.getTmdbMovie(id)
  if (!data) {
    return res.status(500).send('Error')
  }
  return moviesProcess.processMovieDetailed(data)
}
