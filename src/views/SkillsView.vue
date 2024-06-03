<script setup>
import ViewTitle from '@/components/ViewTitle.vue';
import { BrainIcon } from 'lucide-vue-next';
import knowledges from '@/knowledges.json';
</script>
<template>
  <section id="skills">
    <ViewTitle> Habilidades </ViewTitle>
    <p class="py-10">
      <BrainIcon :stroke-width="2.2" :size="32" class="inline text-primary pb-1.5" />
      Conheça um pouco mais sobre minhas habilidades e soft skills que possuo e estou em constante desenvolvimento, pois
      acredito que são essenciais para o meu crescimento profissional.
    </p>

    <p class="text-zinc-600">Em breve...</p>
  </section>
</template>
