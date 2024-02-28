<script setup>
import SkillBarProgress from '@/components/SkillBarProgress.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { BrainIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const items1 = ref([
  {
    name: 'Vue 3',
    level: 3,
  },
  {
    name: 'React JS',
    level: 3,
  },
  {
    name: 'Node JS',
    level: 3,
  },
  {
    name: 'Prisma ORM',
    level: 3,
  },
  {
    name: 'Javascript e Typescript',
    level: 3,
  },
  {
    name: 'TailwindCSS',
    level: 3,
  },
]);

const items2 = ref([
  {
    name: 'Quasar Framework',
    level: 3,
  },
  {
    name: 'NestJS',
    level: 3,
  },
  {
    name: 'Next 13',
    level: 2,
  },
  {
    name: 'Express',
    level: 2,
  },
  {
    name: 'Git e GitHub/GitLab',
    level: 2,
  },
  {
    name: 'Inglês',
    level: 1,
  },
]);
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
          v-for="(item, index) in items1"
          :key="index"
          :name="item.name"
          :level="item.level"
        />
      </div>
      <div class="flex-1 overflow-hidden">
        <SkillBarProgress
          v-for="(item, index) in items2"
          :key="index"
          :name="item.name"
          :level="item.level"
        />
      </div>
    </div>
  </section>
</template>
