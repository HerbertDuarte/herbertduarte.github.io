<script setup>
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  level: {
    type: Number,
    default: 2,
  },
});

const levelLabel = ref('Intermediário');

onBeforeMount(() => {
  switch (props.level) {
    case 1:
      levelLabel.value = 'Básico';
      break;
    case 2:
      levelLabel.value = 'Intermediário';
      break;
    case 3:
      levelLabel.value = 'Avançado';
      break;
    case 4:
      levelLabel.value = 'Especialista';
      break;
  }
});
</script>
<template>
  <div class="py-1.5">
    <div class="flex justify-between">
      <p>{{ name }}</p>
      <p class="text-purple-500">{{ levelLabel }}</p>
    </div>
    <div class="flex">
      <span v-if="level === 1" :class="`h-2.5 basis-[20%] bg-purple-500`" />
      <span v-if="level === 2" :class="`h-2.5 basis-[50%] bg-purple-500`" />
      <span v-if="level === 3" :class="`h-2.5 basis-[95%] bg-purple-500`" />
      <span v-if="level === 4" :class="`h-2.5 basis-[100%] bg-purple-500`" />
      <span class="h-2.5 flex-1 bg-zinc-800" />
    </div>
  </div>
</template>
