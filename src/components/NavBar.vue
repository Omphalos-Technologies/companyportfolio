<script setup>
import { ref } from 'vue';
import logo from '@/assets/img/honeybeecorner.png';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const isMobileMenuOpen = ref(false);

function isActiveLink(routePath) {
    return route.path === routePath;
}

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
    <nav class="bg-black border-b border-black scroll-smooth">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <!-- Logo -->
                <RouterLink class="flex items-center" to="/">
                    <img v-bind:src="logo" alt="Omphalos" class="h-16 w-auto">
                </RouterLink>

                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-6">
                    <RouterLink to="/" class="relative px-3 py-2 text-cloud-white transition-colors duration-300"
                        :class="isActiveLink('/') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        Home
                    </RouterLink>
                    <RouterLink to="/latest-games" class="relative px-3 py-2 text-cloud-white transition-colors duration-300"
                        :class="isActiveLink('/latest-games') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        Latest Games
                    </RouterLink>
                    <RouterLink to="/upcoming-games" class="relative px-3 py-2 text-cloud-white transition-colors duration-300"
                        :class="isActiveLink('/upcoming-games') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        Upcoming Games
                    </RouterLink>
                    <RouterLink to="/about-us" class="relative px-3 py-2 text-cloud-white transition-colors duration-300"
                        :class="isActiveLink('/about-us') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        About Us
                    </RouterLink>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMobileMenu" class="md:hidden text-cloud-white focus:outline-none">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMobileMenuOpen" class="md:hidden bg-black border-t border-gray-700">
                <div class="px-4 py-2 flex flex-col space-y-3">
                    <RouterLink @click="toggleMobileMenu" to="/" class="text-cloud-white py-2"
                        :class="isActiveLink('/') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        Home
                    </RouterLink>
                    <RouterLink @click="toggleMobileMenu" to="/latest-games" class="text-cloud-white py-2"
                        :class="isActiveLink('/latest-games') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        Latest Games
                    </RouterLink>
                    <RouterLink @click="toggleMobileMenu" to="/upcoming-games" class="text-cloud-white py-2"
                        :class="isActiveLink('/upcoming-games') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        Upcoming Games
                    </RouterLink>
                    <RouterLink @click="toggleMobileMenu" to="/about-us" class="text-cloud-white py-2"
                        :class="isActiveLink('/about-us') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                        About Us
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
