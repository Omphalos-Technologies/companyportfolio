<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>