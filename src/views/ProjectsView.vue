<script setup>
import SwiperComponent from '@/components/SwiperComponent.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { FolderClosedIcon, FolderLockIcon, Laptop2Icon } from 'lucide-vue-next';
import projects from '@/data/projects.json';
</script>
<template>
  <section id="projects">
    <ViewTitle> Projetos </ViewTitle>
    <p class="pt-10 pb-2">
      <Laptop2Icon
        :stroke-width="2.2"
        :size="32"
        class="inline text-primary pb-1.5"
      />
      Acesse meus repositórios de projetos no GitHub e o link de alguns deles já
      hospedados:
    </p>
    <p></p>
    <div class="flex flex-col justify-center items-start">
      <SwiperComponent />
      <div class="py-6 flex-1">
        <ul>
          <li class="py-1.5" :key="index" v-for="(project, index) in projects">
            <a
              v-if="project.repo"
              class="hover:text-primary-light text-primary transition-all duration-500"
              :href="project.repo"
              target="_blank"
            >
              <FolderClosedIcon
                :stroke-width="2.2"
                :size="32"
                class="pb-1.5 inline"
                target="_blank"
              />
            </a>
            <span
              v-else
              class="hover:text-zinc-600 text-primary transition-all duration-500 cursor-pointer"
            >
              <FolderLockIcon
                :stroke-width="2.2"
                :size="32"
                class="pb-1.5 inline"
                target="_blank"
              />
            </span>
            <a
              v-if="project.link"
              class="pl-2 hover:text-primary transition-all duration-500"
              target="_blank"
              :href="project.link"
            >
              {{ project.name }}
            </a>
            <span
              v-else
              class="pl-2 hover:text-zinc-600 cursor-not-allowed transition-all duration-500"
            >
              {{ project.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
