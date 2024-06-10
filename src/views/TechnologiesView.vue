<script setup>
import CardTechnology from '@/components/CardTechnology.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { CpuIcon } from 'lucide-vue-next';
import technologies from '@/data/technologies.json';

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
    <div class="flex flex-wrap gap-4">
      <CardTechnology :key="index" v-for="(item, index) in technologies" :description="item.description"
        :image="item.image" :name="item.name" />
    </div>
  </section>
</template>
