<template>
  <div class="flex flex-col justify-center items-center gap-4">

    <div class="border-4 rounded-xl border-purple-800 overflow-hidden">
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
        imageWidth * images.length
      }; transition: transform 0.5s ease; transform: translateX(-${
        currentSlideIndex * rawImageWidth
      }px);`"
        class="flex"
        >
        <img
        :key="index"
        v-for="(image, index) in images"
        class="object-cover"
        :src="image.src"
        :alt="image.alt"
        />
      </div>
    </div>
  </div>
  <div class="gap-1 flex justify-center items-center">
      <div
      v-for="(image, index) in images"
      :class="`w-3 h-3 rounded-full ${
        index === currentSlideIndex ? 'bg-purple-500' : ' bg-purple-950'
      }`"
      />
    </div>
  </div>
  </template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const sliderContainer = ref(document.getElementById("slider-container"));
const slider = ref(document.getElementById("slider"));
const rawImageWidth = ref(1024);
const imageWidth = ref(`${rawImageWidth.value}px`);
const currentSlideIndex = ref(0);
// NO NOTEBOOK O INSPECIONAR PRECISOU TER LARGURA DE 1400PX PARA FICAR NA PROPORÇÃO CORRETA
const images = ref([
  {
    alt: "GanttHub",
    src: "./projetos/gantthub.png",
  },
  {
    alt: "Portifólio Maria Beatriz",
    src: "./projetos/portbia.png",
  },
  {
    alt: "Landing Page Ana Clara",
    src: "./projetos/ana-clara.png",
  },
  {
    alt: "Pokedex",
    src: "./projetos/pokedex.png",
  },
  {
    alt: "Todo List",
    src: "./projetos/todo.png",
  },
  {
    alt: "Mini Blog",
    src: "./projetos/mini-blog.png",
  },
  {
    alt: "Gestor Escolar PMVC",
    src: "./projetos/gestor-escolar.png",
  },
]);
function slideLoop() {
  setInterval(() => {
    if (currentSlideIndex.value < images.value.length - 1) {
      currentSlideIndex.value++;
    } else {
      currentSlideIndex.value = 0;
    }
    const translateXValue = -currentSlideIndex.value * rawImageWidth.value;
    if (slider.value.style)
      slider.value.style.transform = `translateX(${translateXValue}px)`;
  }, 3000);
}
function resizeSlide(){
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

  window.addEventListener('resize', resizeSlide)
});
onBeforeUnmount(()=>{
  window.removeEventListener('resize', resizeSlide)
})
</script>
