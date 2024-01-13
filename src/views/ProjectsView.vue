<script setup>
import Swiper from "@/components/Swiper.vue";
import ViewTitle from "@/components/ViewTitle.vue";
import { FolderClosedIcon, Laptop2Icon } from "lucide-vue-next";

const projects = [
  {
    name: "Portifólio Maria Beatriz",
    repo : "https://github.com/HerbertDuarte/portbia",
    link: "https://portbia.netlify.app/",
  },
  {
    name: "Landing Page Ana Clara",
    repo : "https://github.com/HerbertDuarte/lp-anaclara",
    link: "https://anaclara-model.vercel.app/",
  },
  {
    name: "Gestor Escolar PMVC",
    repo : "https://github.com/HerbertDuarte/teste-dev-cti",
    link: "https://gestor-escolar-pmvc.vercel.app/",
  },
  {
    name: "Mini Blog (React+Firebase)",
    repo : "https://github.com/HerbertDuarte/mini-blog",
    link: "https://mini-blog-snowy.vercel.app/",
  },
  {
    name: "To Do List",
    repo : "https://github.com/HerbertDuarte/to-do-list",
    link: "https://herbertduarte.github.io/to-do-list/"
  },
  {
    name: "Gantt Hub",
    repo : null,
    link: "https://herbertduarte.github.io/to-do-list/"
  }
];
</script>
<template>
  <section id="projects">
    <ViewTitle> Projetos </ViewTitle>
    <p class="text-lg py-10">
      <Laptop2Icon
        :stroke-width="2.2"
        :size="32"
        class="inline text-purple-500 pb-1.5"
      />
      Acesse meus repositórios de projetos no GitHub e o link de alguns deles já
      hospedados:
    </p>
    <p></p>
    <div class="flex">
      <Swiper class="flex-1 gap-8" />
      <div class="py-6 flex-1 text-lg">
        <ul>
          <li class="py-2" :key="index" v-for="(project, index) in projects">
            <a v-if="project.repo" class="hover:text-purple-300 text-purple-600 transition-all duration-500" :href="project.repo">
              <FolderClosedIcon
              :stroke-width="2.2"
              :size="32"
              class=" pb-1.5 inline"
              />
            </a>
            <a v-else class="hover:text-purple-300 text-purple-600 transition-all duration-500">
              <FolderClosedIcon
              :stroke-width="2.2"
              :size="32"
              class=" pb-1.5 inline"
              />
            </a>
            <a class="pl-2 hover:text-purple-500 transition-all duration-500" target="_blank" :href="project.link">
              {{ project.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
