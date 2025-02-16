<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

function isActiveLink(routePath) {
    return route.path === routePath;
}
</script>

<template>
    <nav class="bg-deep-purple border-b border-deep-purple">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
                        <img src="" alt="Omphalos" class="h-10 w-auto">
                        <span class="hidden md:block text-cloud-white text-2xl font-bold ml-2">
                            Omphalos
                        </span>
                    </RouterLink>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink to="/" class="relative px-3 py-2 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/') ? 'text-electric-blue font-bold' : 'hover:text-electric-blue'">
                                Home
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-electric-blue transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/'), 'group-hover:scale-x-100': !isActiveLink('/') }">
                                </span>
                            </RouterLink>
                            <RouterLink to="/latest-games" class="relative px-3 py-2 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/latest-games') ? 'text-electric-blue font-bold' : 'hover:text-electric-blue'">
                                Latest Games
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-electric-blue transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/latest-games'), 'group-hover:scale-x-100': !isActiveLink('/latest-games') }">
                                </span>
                            </RouterLink>
                            <RouterLink to="/upcoming-games" class="relative px-3 py-2 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/upcoming-games') ? 'text-electric-blue font-bold' : 'hover:text-electric-blue'">
                                Upcoming Games
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-electric-blue transition-transform duration-300 ease-in-out origin-left scale-x-0"
                                    :class="{ 'scale-x-100': isActiveLink('/upcoming-games'), 'group-hover:scale-x-100': !isActiveLink('/upcoming-games') }">
                                </span>
                            </RouterLink>
                            <RouterLink to="/news" class="relative px-3 py-2 text-cloud-white  transition-colors duration-300"
                                :class="isActiveLink('/news') ? 'text-electric-blue font-bold' : 'hover:text-electric-blue'">
                                News
                                <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-electric-blue transition-transform duration-300 ease-in-out origin-left scale-x-0"
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
