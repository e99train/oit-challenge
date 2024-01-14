const posterImageBaseUrl = 'http://image.tmdb.org/t/p/'
const poserImageSmallSize = 'w92'
const posterImageLargeSize = 'w500'

exports.processMovies = (data) => {
  const movies = data.map((movieData) => {
    return {
      "movie_id": movieData.id,
      "title": movieData.title,
      "poster_image_url": posterImageBaseUrl + poserImageSmallSize + movieData.poster_path,
      "popularity_summary": movieData.popularity + " out of " + movieData.vote_count
    }
  }).slice(0, 10)
  console.log('Formatted list of movies: ' + movies)
  return movies
}

exports.processMovieDetailed = (data) => {
  const formattedMovie = {
    "movie_id": data.id,
    "title": data.title,
    "poster_image_url": posterImageBaseUrl + posterImageLargeSize + data.poster_path,
    "overview": data.overview,
    "release_date": data.release_date,
    "runtime": data.runtime,
    "popularity": data.popularity,
    "vote_average": data.vote_average
  }
  console.log('Formatted movie info: ' + formattedMovie)
  return formattedMovie
}
