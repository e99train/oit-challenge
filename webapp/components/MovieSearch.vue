<script setup lang="js">
import { ref } from 'vue'
import Movie from "~/components/Movie.vue";

const movies = ref([])
const query = ref('')
let searched = false

async function searchMovies(query) {
    const response = await fetch(`http://localhost:8080/movies?search=${query}`)
    const movies = await response.json()
    console.log(movies)
    searched = true
    return movies
}
</script>

<template>
    <div>
        <div class="my-4">
            <h2 class="text-lg font-semibold mb-2">Search for a Movie!</h2>
            <div class="flex items-center">
                <input type="text" v-model="query" placeholder="Enter a movie title" class="border border-gray-300 p-2 mr-2 w-64" />
                <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        @click="async() => {
                    movies = await searchMovies(query)
                }">
                    Search
                </button>
            </div>
        </div>
        <div class="results">
            <div v-if="movies.length === 0 && searched">
                <h2 class="text-lg font-semibold mb-2">No Results</h2>
            </div>
            <div v-if="movies.length !== 0">
                <h2 class="text-lg font-semibold mb-2">Search Results</h2>
            </div>
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <Movie :movie="movie" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
div {
    margin: 0 auto;
    max-width: 600px;
}
.results {
    padding-top: 150px;
}
</style>
