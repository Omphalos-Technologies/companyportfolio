<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="text-center flex flex-col justify-center items-center h-96 bg-black py-20">
      <img src="@/assets/img/404_not_found.gif" alt="404 Not Found" class="w-96 h-96">
      <h1 class="text-6xl font-bold mb-4 text-cloud-white">404 Not Found</h1>
      <p class="text-xl mb-5 text-cloud-white">This page does not exist</p>
      <RouterLink
        to="/"
        class="text-white bg-golden-honey hover:shadow-[0_4px_10px_#FFB703] rounded-md px-3 py-2 mt-4"
        >Go Back</RouterLink
      >
    </section>
</template>