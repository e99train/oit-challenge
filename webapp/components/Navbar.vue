<template>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex items-center justify-between">
            <!-- Home Link -->
            <nuxt-link to="/" class="text-white font-semibold">Home</nuxt-link>

            <!-- About Link -->
            <nuxt-link to="/about" class="text-white">About</nuxt-link>
        </div>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>
