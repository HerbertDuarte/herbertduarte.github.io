<script setup lang="ts">

defineProps({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="bg-main-smooth p-3 rounded-md min-w-52 flex gap-4 flex-1">
    <img class="size-10" :src="image" :alt="name">
    <div>
      <h3 class="font-medium">{{ name }}</h3>
      <p class="text-xs text-letter-smooth">{{ description }}</p>
    </div>
  </div>
</template>