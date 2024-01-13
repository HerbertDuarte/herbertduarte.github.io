<template>
  <div class="flex flex-col justify-center items-center gap-3 my-8 w-fit">
    <div
      ref="sliderContainer"
      :style="`width : 100%; max-width: ${imageWidth}; overflow-x: hidden;`"
      class="rounded-md"
    >
      <div
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
import { onMounted, ref } from "vue";

const sliderContainer = ref(null);
const slider = ref(null);
const imageWidth = ref("460px");
const rawImageWidth = ref(460);
const currentSlideIndex = ref(0);
const images = ref([
  {
    alt: "slide 1",
    src: "../../public/slide1.PNG",
  },
  {
    alt: "slide 1",
    src: "../../public/slide2.PNG",
  },
  {
    alt: "slide 1",
    src: "../../public/slide3.PNG",
  },
  {
    alt: "slide 1",
    src: "../../public/slide5.PNG",
  },
  {
    alt: "slide 1",
    src: "../../public/clara.PNG",
  },
]);

function slideLoop(){
  setInterval(() => {
    if (currentSlideIndex.value < images.value.length - 1) {
      currentSlideIndex.value++;
    } else {
      currentSlideIndex.value = 0;
    }

    const translateXValue = -currentSlideIndex.value * rawImageWidth.value;
    if(slider.value.style) slider.value.style.transform = `translateX(${translateXValue}px)`;
  }, 3000);
}

onMounted(() => {
  slideLoop();

  console.log(sliderContainer.value.offsetWidth);
  console.log(slider.value.offsetWidth);
});
</script>
