<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Card from './Card.vue';

// Import images directly
import hiluxSim from '@/assets/img/hiluxlatest.png';
import flappyBird from '@/assets/img/bigflappy.png';

// Define game data with imported images
const games = ref([
    { id: 1, title: "Hilux Simulator", image: hiluxSim },
    { id: 2, title: "Little Flappy Bird", image: flappyBird },
]);

// Active game state (default to first game)
const activeGame = ref(games.value[0]);

// Function to update the main card
const setActiveGame = (game) => {
    activeGame.value = game;
};
</script>

<template>
    <section class="bg-black py-4 scroll-smooth">
        <h3 class="font-bold text-3xl py-10 text-center text-cloud-white">Latest Games</h3>

        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        
            <!-- Large Card (Left) -->
            <div class="md:col-span-2 ml-6">
                <Card 
                    :style="{ 
                        backgroundImage: 'url(' + activeGame.image + ')', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        height: '500px' 
                    }"
                >
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center mt-auto mb-4">
                            <p class="font-bold text-cloud-white text-xl">{{ activeGame.title }}</p>
                            <RouterLink :to="'/game/' + activeGame.id">
                                <button class="bg-golden-honey hover:shadow-[0_4px_10px_#FFB703] text-white px-4 py-2 rounded-lg">
                                    View Game
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Small Cards (Right) -->
            <div class="flex flex-col space-y-6 md:space-y-4">
                <Card 
                    v-for="game in games" 
                    :key="game.id" 
                    :style="{ 
                        backgroundImage: 'url(' + game.image + ')', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        height: '150px' 
                    }"
                    class="cursor-pointer transition-transform transform hover:scale-105 mx-auto"
                    @mouseover="setActiveGame(game)"
                    @click="setActiveGame(game)"
                >
                    <div class="flex flex-col h-full">
                        <p class="font-bold text-cloud-white text-sm p-2">{{ game.title }}</p>
                    </div>
                </Card>
            </div>    
        </div>

        <!-- More games button-->
        <div class="flex justify-center mt-10">
            <RouterLink to="/latest-games">
                <button class="bg-golden-honey hover:shadow-[0_4px_10px_#FFB703] text-white px-4 py-2 rounded-lg">
                    More games
                </button>
            </RouterLink>
        </div>
    </section>
</template>

