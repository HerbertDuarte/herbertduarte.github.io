<script setup>
import SkillBarProgress from '@/components/SkillBarProgress.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { CpuIcon } from 'lucide-vue-next';
import { ref } from 'vue';
import technologies from '@/technologies.json';
import { divideArray } from '@/services/divideArrayService';

const technologiesArrays = ref(divideArray(technologies));
</script>
<template>
  <section id="technologies">
    <ViewTitle> Tecnologias </ViewTitle>
    <p class="py-10">
      <CpuIcon :stroke-width="2.2" :size="32" class="inline text-primary pb-1.5" />
      Conheça um pouco mais sobre minhas habilidades com as tecnologias que domino e estudo diariamente para aprimorar
      meus
      conhecimentos e ter boa práticas.
    </p>
    <div class="flex lg:flex-row flex-col lg:gap-8 gap-0">
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress v-for="(item, index) in technologiesArrays[0]" :key="index" :name="item.name"
          :level="item.level" />
      </div>
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress v-for="(item, index) in technologiesArrays[1]" :key="index" :name="item.name"
          :level="item.level" />
      </div>
    </div>
  </section>
</template>
