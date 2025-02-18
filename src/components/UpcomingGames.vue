<script setup>
import { ref, onMounted } from 'vue';
import { Carousel } from 'flowbite';

const carouselElement = ref(null);

onMounted(() => {
  const carousel = new Carousel(carouselElement.value, {
    interval: 3000,
    indicators: {
      activeClasses: 'bg-white',
      inactiveClasses: 'bg-gray-300'
    }
  });
});
</script>

<template>
    <section class="bg-black py-20 px-6 scroll-smooth" >
        <h3 class="font-bold text-3xl py-10 text-center text-cloud-white">
            Upcoming Games
        </h3> <br>
        <div 
          id="default-carousel" 
          class="relative mx-auto w-full max-w-[1400px]" 
          data-carousel="slide" 
          ref="carouselElement"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-80 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img 
            src="@/assets/img/onehour.png" 
            class="w-full h-full object-cover" 
            alt="One Hour"
          >
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img 
            src="@/assets/img/streetracer.png" 
            class="w-full h-full object-cover" 
            alt="Street Racer"
          >
        </div>
          </div>

          <!-- Slider indicators -->
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          </div>

          <!-- Slider controls -->
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>

          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
  </section>
</template>