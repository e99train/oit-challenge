<template>
    <div v-if="pending" class="container mx-auto p-8">
        <h1 class="text-2xl font-semibold mb-4">Loading...</h1>
    </div>
    <div v-else class="container mx-auto p-8">
        <!-- Movie Poster -->
        <img :src="movieDetails?.poster_image_url" alt="Movie Poster" class="rounded-lg w-full md:w-64 h-auto mb-4 mx-auto">

        <!-- Movie Details -->
        <div>
            <!-- Movie Title -->
            <h1 class="text-2xl font-semibold mb-4">{{ movieDetails?.title }}</h1>

            <!-- Movie Overview -->
            <p class="text-gray-600 mb-4">{{ movieDetails?.overview }}</p>

            <!-- Additional Movie Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left Column: Release Date, Genre, etc. -->
                <div>
                    <h2 class="text-lg font-semibold mb-2">Details</h2>
                    <ul class="list-disc pl-4">
                        <li><span class="font-semibold">Release Date:</span> {{ movieDetails?.releaseDate }}</li>
                        <li><span class="font-semibold">Runtime:</span> {{ movieDetails?.runtime }} minutes</li>
                        <!-- Add more details as needed -->
                    </ul>
                </div>

                <!-- Right Column: Ratings, Cast, etc. -->
                <div>
                    <h2 class="text-lg font-semibold mb-2">Additional Information</h2>
                    <ul class="list-disc pl-4">
                        <li><span class="font-semibold">Popularity:</span> {{ movieDetails?.popularity }}</li>
                        <li><span class="font-semibold">Average Rating:</span> {{ movieDetails?.vote_average }}</li>
                        <!-- Add more additional information as needed -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['movieId'])
const { pending, data: movieDetails } = await useFetch(`http://localhost:8080/movies/${props.movieId}`)
</script>
