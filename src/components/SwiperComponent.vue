<template>
  <div class="flex flex-col justify-center items-center md:gap-4 gap-2">
    <div class="md:border-4 border-2 rounded-xl border-purple-800 overflow-hidden">
      <div
        id="slider-container"
        ref="sliderContainer"
        :style="`width : 100%; max-width: ${imageWidth}; overflow-x: hidden;`"
        class="rounded-md"
      >
        <div
          id="slider"
          ref="slider"
          :style="`width : 100%; max-width: ${
            imageWidth * projects.length
          }; transition: transform 0.5s ease; transform: translateX(-${
            currentSlideIndex * rawImageWidth
          }px);`"
          class="flex"
        >
          <img
            :key="index"
            v-for="(image, index) in projects"
            class="object-cover"
            :src="image.src"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
    <div class="gap-1 flex justify-center items-center">
      <div
        :key="index"
        v-for="(image, index) in projects"
        :class="`md:w-3 md:h-3 w-2.5 h-2.5 rounded-full ${
          index === currentSlideIndex ? 'bg-purple-500' : ' bg-purple-950'
        }`"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import projects from '@/projects';
const sliderContainer = ref(document.getElementById('slider-container'));
const slider = ref(document.getElementById('slider'));
const rawImageWidth = ref(1024);
const imageWidth = ref(`${rawImageWidth.value}px`);
const currentSlideIndex = ref(0);
// NO NOTEBOOK O INSPECIONAR PRECISOU TER LARGURA DE 1400PX PARA FICAR NA PROPORÇÃO CORRETA

function slideLoop() {
  setInterval(() => {
    if (currentSlideIndex.value < projects.length - 1) {
      currentSlideIndex.value++;
    } else {
      currentSlideIndex.value = 0;
    }
    const translateXValue = -currentSlideIndex.value * rawImageWidth.value;
    if (slider.value.style)
      slider.value.style.transform = `translateX(${translateXValue}px)`;
  }, 3000);
}
function resizeSlide() {
  fixImageWidth();
}
function fixImageWidth() {
  rawImageWidth.value = slider.value.offsetWidth;
}
onMounted(() => {
  setTimeout(() => {
    slideLoop();
    fixImageWidth();
  }, 1000);

  window.addEventListener('resize', resizeSlide);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeSlide);
});
</script>
