<script setup>
import ViewTitle from '@/components/ViewTitle.vue';
import { BrainIcon } from 'lucide-vue-next';
import knowledges from '@/data/knowledges.json';
import { ref } from 'vue';
import { divideArray } from '@/services/divideArrayService';
import SkillBarProgress from '@/components/SkillBarProgress.vue';
const knowledgesArrays = ref(divideArray(knowledges));
console.log(knowledgesArrays.value[0]);
</script>
<template>
  <section id="skills">
    <ViewTitle> Habilidades </ViewTitle>
    <p class="py-10">
      <BrainIcon :stroke-width="2.2" :size="32" class="inline text-primary pb-1.5" />
      Conheça um pouco mais sobre minhas habilidades e soft skills que possuo e estou em constante desenvolvimento, pois
      acredito que são essenciais para o meu crescimento profissional.
    </p>

    <div class="flex lg:flex-row flex-col lg:gap-8 gap-0">
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress :key="index" v-for="(item, index) in knowledgesArrays[0]" :name="item.name"
          :level="item.level" />
      </div>
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress :key="index" v-for="(item, index) in knowledgesArrays[1]" :name="item.name"
          :level="item.level" />
      </div>
    </div>


  </section>
</template>
