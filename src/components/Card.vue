<script setup>
import { defineProps, h } from 'vue';
defineProps({
    bg: {
        type: String,
        default: 'bg-cloud-white'
    },
    height: {
        type: String,
        default: 'h-70 md:h-[350px]'
    },
    width: {
        type: String,
        default: 'w-70'
    }
    
})
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-lg ${height} bg-cover bg-center ${width}`">
        <slot></slot>
    </div>
</template>