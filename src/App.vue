<script setup>
import { RouterView } from 'vue-router';
import MyHeader from './layout/MyHeader.vue';
import MyFooter from './layout/MyFooter.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log("Seja bem-vindo ao meu portfólio! Espero que goste do que verá por aqui. 😄");
})
</script>

<template>
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>
