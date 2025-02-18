<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Card from './Card.vue';

// Define game data
const games = ref([
    { id: 1, title: "Call of Duty", image: "@/assets/img/call_of_duty.webp" },
    { id: 2, title: "Ghost of Tsushima", image: "@/assets/img/ghostOfTsushima.jpg" },
    { id: 3, title: "God of War", image: "@/assets/img/godOfWar.webp" },
    { id: 4, title: "Red Dead Redemption 2", image: "@/assets/img/red_dead_redemption.jpg" }
]);

// Active game state (default to first game)
const activeGame = ref(games.value[0]);

// Function to update the main card
const setActiveGame = (game) => {
    activeGame.value = game;
};
</script>

<template>
    <section class="bg-black py-4 scroll-smooth" >
        <h3 class="font-bold text-3xl py-10 text-center text-cloud-white">Latest Games</h3>
        
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <!-- Large Card (Left) -->
            <div class="md:col-span-2 item">
                <Card :bg="'bg-[url(' + activeGame.image + ')]'">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center mt-auto mb-4">
                            <p class="font-bold text-cloud-white text-xl">{{ activeGame.title }}</p>
                            <RouterLink :to="'/game/' + activeGame.id">
                                <button class="bg-golden-honey hover:shadow-[0_4px_10px_#FFB703] text-white px-4 py-2 rounded-lg">View Game</button>
                            </RouterLink>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Small Cards (Right) -->
            <div class="flex flex-col space-y-4">
                <Card 
                    v-for="game in games" 
                    :key="game.id" 
                    :bg="'bg-[url(' + game.image + ')]'"
                    class="cursor-pointer transition-transform transform hover:scale-105"
                    @mouseover="setActiveGame(game)"
                    @click="setActiveGame(game)"
                    height="h-"
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
