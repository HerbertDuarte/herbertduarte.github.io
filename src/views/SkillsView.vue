<script setup>
import SkillBarProgress from "@/components/SkillBarProgress.vue";
import ViewTitle from "@/components/ViewTitle.vue";
import { BrainIcon } from "lucide-vue-next";
</script>
<template>
  <section id="skills">
    <ViewTitle> Habilidades </ViewTitle>
    <p class="text-lg py-10">
      <BrainIcon
        :stroke-width="2.2"
        :size="32"
        class="inline text-purple-500 pb-1.5"
      />
      Navegue por Minhas Habilidades: Um Glimpse no Mundo do Desenvolvimento que Domino
    </p>
    <div class="flex gap-8">
      <div class="py-2 flex-1">
        <SkillBarProgress name="Vue 3" :level="3" />
        <SkillBarProgress name="React JS" :level="3" />
        <SkillBarProgress name="Node JS" :level="3" />
        <SkillBarProgress name="Prisma ORM" :level="3" />
        <SkillBarProgress name="Javascript e Typescript" :level="3" />
        <SkillBarProgress name="TailwindCSS" :level="3" />
      </div>
      <div class="py-2 flex-1">
        <SkillBarProgress name="Quasar Framework" :level="3" />
        <SkillBarProgress name="NestJS" :level="3" />
        <SkillBarProgress name="Next 13" :level="2" />
        <SkillBarProgress name="Express" :level="2" />
        <SkillBarProgress name="Git e GitHub/GitLab" :level="2" />
        <SkillBarProgress name="Inglês" :level="1" />
      </div>
    </div>
  </section>
</template>
