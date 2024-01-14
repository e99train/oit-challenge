const movies = require('../../src/process/movies')

test('processMovies', () => {
  const data = [
    {
      "id": 1,
      "title": "Movie 1",
      "poster_path": "/poster1.jpg",
      "popularity": 100,
      "vote_count": 1000
    },
    {
      "id": 2,
      "title": "Movie 2",
      "poster_path": "/poster2.jpg",
      "popularity": 200,
      "vote_count": 2000
    }
  ]
  const expected = [
    {
      "movie_id": 1,
      "title": "Movie 1",
      "poster_image_url": "http://image.tmdb.org/t/p/w92/poster1.jpg",
      "popularity_summary": "100 out of 1000"
    },
    {
      "movie_id": 2,
      "title": "Movie 2",
      "poster_image_url": "http://image.tmdb.org/t/p/w92/poster2.jpg",
      "popularity_summary": "200 out of 2000"
    }
  ]
  expect(movies.processMovies(data)).toEqual(expected)
})

test('processMovieDetailed', () => {
  const data = {
    "id": 1,
    "title": "Movie 1",
    "poster_path": "/poster1.jpg",
    "overview": "Overview",
    "release_date": "2020-01-01",
    "runtime": 100,
    "popularity": 100,
    "vote_average": 10
  }
  const expected = {
    "movie_id": 1,
    "title": "Movie 1",
    "poster_image_url": "http://image.tmdb.org/t/p/w500/poster1.jpg",
    "overview": "Overview",
    "release_date": "2020-01-01",
    "runtime": 100,
    "popularity": 100,
    "vote_average": 10
  }
  expect(movies.processMovieDetailed(data)).toEqual(expected)
})
