<script setup>
import { RouterView } from "vue-router";
import MyHeader from "./layout/MyHeader.vue";
import MyFooter from "./layout/MyFooter.vue";
</script>

<template>
  <MyHeader />
  <RouterView />
  <MyFooter />
</template>
