<script setup>
import { RouterView } from 'vue-router';
import MyHeader from './components/MyHeader.vue';
import { onMounted } from 'vue';

onMounted(()=>{
  window.scrollY = 0;
})
</script>

<template>
  <MyHeader/>
  <RouterView/>
</template>