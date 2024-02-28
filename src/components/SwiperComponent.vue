<template>
  <div class="flex flex-col justify-center items-center md:gap-4 gap-2">
    <div class="w-full flex justify-end items-center">
      <p class="text-zinc-300 pb-px">automático</p>
      <div class="toggle-switch">
        <input
          v-model="autoplay"
          class="toggle-input"
          id="toggle"
          type="checkbox"
        />
        <label class="toggle-label" for="toggle"></label>
      </div>
    </div>
    <div
      class="md:border-4 border-2 rounded-xl border-purple-800 overflow-hidden relative"
    >
      <button
        @click="previusPage"
        class="h-full px-4 absolute z-20 top-0 left-0 flex justify-center items-center hover:bg-black/10 transition-all duration-300"
      >
        <ChevronLeft
          class="size-10 md:size-16 text-white/80 drop-shadow-lg shadow-black"
        />
      </button>
      <button
        @click="nextPage"
        class="h-full px-4 absolute z-20 top-0 right-0 flex justify-center items-center hover:bg-black/10 transition-all duration-300"
      >
        <ChevronRight
          class="size-10 md:size-16 text-white/80 drop-shadow-lg shadow-black"
        />
      </button>
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
          class="flex cursor-pointer"
        >
          <img
            @click="externalPush(image.link)"
            :key="index"
            v-for="(image, index) in projects"
            :src="image.src"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
    <div class="gap-1 flex justify-center items-center">
      <div
        :key="index"
        v-for="(_, index) in projects"
        :class="`md:w-3 md:h-3 w-2.5 h-2.5 rounded-full ${
          index === currentSlideIndex ? 'bg-purple-500' : ' bg-purple-950'
        }`"
      />
    </div>
  </div>
</template>

<script setup>
import '../assets/toggle-button.css';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import projects from '@/projects';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
const sliderContainer = ref(document.getElementById('slider-container'));
const slider = ref(document.getElementById('slider'));
const rawImageWidth = ref(1024);
const imageWidth = ref(`${rawImageWidth.value}px`);
const currentSlideIndex = ref(0);
const autoplay = ref(true);
const slideInterval = ref(null);

function externalPush(url) {
  window.open(url, '_blank');
}
// NO NOTEBOOK O INSPECIONAR PRECISOU TER LARGURA DE 1400PX PARA FICAR NA PROPORÇÃO CORRETA

function nextPage() {
  if (autoplay.value) {
    autoplay.value = false;
  }
  if (currentSlideIndex.value >= projects.length - 1) {
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value++;
  }
}

function previusPage() {
  if (autoplay.value) {
    autoplay.value = false;
  }
  if (currentSlideIndex.value <= 0) {
    currentSlideIndex.value = projects.length -1 ;
  } else {
    currentSlideIndex.value--;
  }
}

function defineInterval() {
  return setInterval(() => {
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

function slideLoop() {
  slideInterval.value = defineInterval();
}
function resizeSlide() {
  fixImageWidth();
}
function fixImageWidth() {
  rawImageWidth.value = slider.value.offsetWidth;
}

watch(autoplay, (newValue) => {
  if (!newValue) {
    clearInterval(slideInterval.value);
    slideInterval.value = null;
  } else {
    slideInterval.value = defineInterval();
  }
});

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
