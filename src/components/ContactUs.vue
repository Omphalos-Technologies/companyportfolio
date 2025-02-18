<script setup>
import { ref } from 'vue';
</script>

<template>
    <section class="bg-black text-white py-16 scroll-smooth">
       <!-- Section Title -->
       <div class="container mx-auto text-center mb-12">
           <h3 class="font-bold text-3xl mb-3 text-center text-cloud-white">
               Contact Us
           </h3>
           <p class="text-sm text-gray-300">- Let's get in touch -</p> 
       </div>
   
       <div class="container mx-auto px-6 rounded-lg shadow-[0_4px_10px_#FFB703] py-10">
           <div class="grid grid-cols-1 md:grid-cols-2 gap-1 items-center mx-10">
               <!-- Contact Info -->
               <div class="space-y-6">
                   <h1 class="text-5xl font-bold">We want to hear from you</h1>
   
                   <div class="flex items-center space-x-4">
                       <svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                       </svg>
                       <div>
                           <h3 class="text-xl font-semibold">Call Us</h3>
                           <p><a href="tel:+260971793185" class="text-blue-400 hover:underline">+260 971 793185</a></p>
                       </div>
                   </div>
                   
                   <div class="flex items-center space-x-4">
                       <svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                       </svg>
                       <div>
                           <h3 class="text-xl font-semibold">Email Us</h3>
                           <p><a href="mailto:omphalos360@gmail.com" class="text-blue-400 hover:underline">omphalos360@gmail.com</a></p>
                       </div>
                   </div>
               </div>
   
               <!-- Contact Form -->
               <div>
                   <form method="post" class="bg-black p-6">
                       <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <input type="text" name="name" class="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required>
                           <input type="email" name="email" class="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" required>
                       </div>
                       <input type="text" name="subject" class="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4" placeholder="Subject" required>
                       <textarea name="message" rows="6" class="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4" placeholder="Message" required></textarea>
                       <div class="text-center mt-4">
                           <button type="submit" class="bg-golden-honey hover:shadow-[0_4px_10px_#FFB703] text-white font-bold py-2 px-6 rounded-lg transition duration-300">Send Message</button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
   </section>
   </template>
   