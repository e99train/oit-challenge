<template>
    <div class="flex p-4 border border-gray-300 mb-4">
        <!-- Movie Poster -->
        <img :src="movie.poster_image_url" alt="Movie Poster" class="w-32 h-48 object-cover mr-4">

        <!-- Movie Information -->
        <div>
            <!-- Movie Title -->
            <h2 class="text-lg font-semibold mb-2">{{ movie.title }}</h2>

            <!-- Movie Popularity Rating -->
            <div class="flex items-center mb-2">
                <span class="text-gray-600 mr-2">Popularity:</span>
                <span class="text-blue-500">{{ movie.popularity_summary }}</span>
            </div>

            <NuxtLink :to="'/movie/' + movie.movie_id" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                More Info
            </NuxtLink>

            <!-- Additional Movie Info (Add as needed) -->
            <!-- Example: <p>{{ movie.releaseDate }}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>