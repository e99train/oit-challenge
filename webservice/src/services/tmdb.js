const tmdbBaseUrl = 'https://api.themoviedb.org/3'
const axios = require('axios')

exports.searchTmdbMovies = async (search) => {
  const url = `${tmdbBaseUrl}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
  try {
    const {data} = await axios.get(url, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${process.env.TMDB_API_KEY}`
      }
    })
    console.log(data.results)
    return data.results
  } catch (e) {
    console.log(e)
    return null
  }
}

exports.getTmdbMovie = async (id) => {
  const url = `${tmdbBaseUrl}/movie/${id}?language=en-US`
  try {
    const { data } = await axios.get(url, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${process.env.TMDB_API_KEY}`
      }
    })
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}
