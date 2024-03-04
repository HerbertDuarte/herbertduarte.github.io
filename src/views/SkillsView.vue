<script setup>
import SkillBarProgress from '@/components/SkillBarProgress.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { BrainIcon } from 'lucide-vue-next';
import { ref } from 'vue';
import skills from '@/skills.json';

function divideArray(array) {
  const firstArrayLength =
    array.length % 2 === 0 ? array.length / 2 : Math.ceil(array.length / 2);

  let firstArray = [];
  let secondArray = [];

  for (let i = 0; i < firstArrayLength - 0; i++) {
    firstArray.push(array[i]);
  }
  for (let i = firstArrayLength; i < array.length - 0; i++) {
    secondArray.push(array[i]);
  }

  return [firstArray, secondArray];
}

const skillsArrays = ref(divideArray(skills));
</script>
<template>
  <section id="skills">
    <ViewTitle> Habilidades </ViewTitle>
    <p class="py-10">
      <BrainIcon
        :stroke-width="2.2"
        :size="32"
        class="inline text-purple-500 pb-1.5"
      />
      Conheça um pouco mais sobre minhas habilidades e tecnologias que domino,
      envolvendo tanto o desenvolvimento front-end quanto o back-end.
    </p>
    <div class="flex lg:flex-row flex-col lg:gap-8 gap-0">
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress
          v-for="(item, index) in skillsArrays[0]"
          :key="index"
          :name="item.name"
          :level="item.level"
        />
      </div>
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress
          v-for="(item, index) in skillsArrays[1]"
          :key="index"
          :name="item.name"
          :level="item.level"
        />
      </div>
    </div>
  </section>
</template>
