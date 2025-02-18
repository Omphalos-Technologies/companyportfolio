<script setup>
import logo from '@/assets/img/honeybeecorner.png'
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

function isActiveLink(routePath) {
    return route.path === routePath;
}
</script>

<template>
    <nav class="bg-black border-b border-black scroll-smooth">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
                        <img v-bind:src="logo" alt="Omphalos" class="h-20 w-auto">
                        
                    </RouterLink>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink to="/" class="relative px-3 py-4 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                                Home
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-golden-honey transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/'), 'group-hover:scale-x-100': !isActiveLink('/') }">
                                </span>
                            </RouterLink>
                            <RouterLink to="/latest-games" class="relative px-3 py-4 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/latest-games') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                                Latest Games
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-golden-honey transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/latest-games'), 'group-hover:scale-x-100': !isActiveLink('/latest-games') }">
                                </span>
                            </RouterLink>
                            <RouterLink to="/upcoming-games" class="relative px-3 py-4 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/upcoming-games') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                                Upcoming Games
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-golden-honey transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/upcoming-games'), 'group-hover:scale-x-100': !isActiveLink('/upcoming-games') }">
                                </span>
                            </RouterLink>
                            <RouterLink to="/about-us" class="relative px-3 py-4 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/news') ? 'text-golden-honey font-bold' : 'hover:text-golden-honey'">
                                About Us
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-golden-honey transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/news'), 'group-hover:scale-x-100': !isActiveLink('/news') }">
                                </span>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
