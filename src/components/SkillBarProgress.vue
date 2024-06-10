<script setup>
import { useMotion } from '@vueuse/motion';
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
const skilBarRef = ref();


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


useMotion(skilBarRef, {
  initial: {
    x: -50,
  },
  visible: {
    x: 0,
    transition: {
      ease: 'linear',
      duration: 350
    }
  },
});


</script>
<template>
  <div class="py-1.5">
    <div class="flex justify-between">
      <p>{{ name }}</p>
      <p class="text-primary">{{ levelLabel }}</p>
    </div>
    <div class="flex bg-main-smooth">

      <span ref="skilBarRef" class="h-2.5 flex-1 bg-primary" />
      <span v-if="level === 1" :class="`h-2.5 w-[80%]`" />
      <span v-if="level === 2" :class="`h-2.5 w-[50%]`" />
      <span v-if="level === 3" :class="`h-2.5 w-[5%]`" />
      <span v-if="level === 4" :class="`h-2.5 w-[0%]`" />
    </div>
  </div>
</template>
