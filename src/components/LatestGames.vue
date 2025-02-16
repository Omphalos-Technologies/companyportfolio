<script setup>
import { RouterLink } from 'vue-router';
import Card from './Card.vue';
</script>

<template>
    <section class="bg-cloud-white py-4">
        <h3 class="font-bold text-3xl py-10 text-center">
                    Latest Games
                </h3> <br>
        <div class="container-xl lg:container m-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                
                <Card bg="bg-[url('@/assets/img/call_of_duty.webp')]">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center mt-auto mb-4">
                            <p class="font-bold text-cloud-white">Game 1</p>
                            <RouterLink to="'/game/' + game.id">
                                <button class="bg-electric-blue text-white px-4 py-2 rounded-lg">View Game</button>
                            </RouterLink>
                        </div>
                    </div>
                </Card>
                <Card bg="bg-[url('@/assets/img/ghostOfTsushima.jpg')]">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center mt-auto mb-4">
                            <p class="font-bold text-cloud-white">Game 1</p>
                            <RouterLink to="'/game/' + game.id">
                                <button class="bg-electric-blue text-white px-4 py-2 rounded-lg">View Game</button>
                            </RouterLink>
                        </div>
                    </div>
                </Card>
                <Card bg="bg-[url('@/assets/img/godOfWar.webp')]">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center mt-auto mb-4">
                            <p class="font-bold text-cloud-white">Game 1</p>
                            <RouterLink to="'/game/' + game.id">
                                <button class="bg-electric-blue text-white px-4 py-2 rounded-lg">View Game</button>
                            </RouterLink>
                        </div>
                    </div>
                </Card>
                <Card bg="bg-[url('@/assets/img/call_of_duty.webp')]">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center mt-auto mb-4">
                            <p class="font-bold text-cloud-white">Game 1</p>
                            <RouterLink to="'/game/' + game.id">
                                <button class="bg-electric-blue text-white px-4 py-2 rounded-lg">View Game</button>
                            </RouterLink>
                        </div>
                    </div>
                </Card>           

            </div>
        </div>
    </section>
</template>