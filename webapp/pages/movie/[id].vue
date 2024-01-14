<template>
    <div style="padding-top: 100px;">
        <MovieDetailed :movie-id="movieId" />
    </div>
</template>

<script setup lang="ts">
import MovieDetailed from "~/components/MovieDetailed.vue"
const route = useRoute()
let movieId = route.params.id
</script>