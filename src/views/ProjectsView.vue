<script setup>
import Swiper from "@/components/Swiper.vue";
import ViewTitle from "@/components/ViewTitle.vue";
import { FolderClosedIcon, FolderLockIcon, Laptop2Icon } from "lucide-vue-next";

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
    name: "Pokedex",
    repo : "https://github.com/HerbertDuarte/pokedex",
    link: "https://herbertduarte.github.io/pokedex/"
  },
  {
    name: "To Do List",
    repo : "https://github.com/HerbertDuarte/to-do-list",
    link: "https://herbertduarte.github.io/to-do-list/"
  },
  {
    name: "Gantt Hub",
    repo : "https://www.linkedin.com/posts/herbert-duarte-8534b71a2_vuejs-quasarframework-nestjs-activity-7147697683078582272-tIN4?utm_source=share&utm_medium=member_desktop",
    link: "https://gantthub.pmvc.ba.gov.br/login"
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
    <div class="flex flex-col justify-center items-start">
        <Swiper />
      <div class="py-6 flex-1 text-lg">
        <ul>
          <li class="py-2" :key="index" v-for="(project, index) in projects">
            <a v-if="project.repo" class="hover:text-purple-300 text-purple-600 transition-all duration-500" :href="project.repo">
              <FolderClosedIcon
              :stroke-width="2.2"
              :size="32"
              class=" pb-1.5 inline"
              target="_blank"
              />
            </a>
            <a v-else class="hover:text-red-900 text-purple-600 transition-all duration-500 cursor-pointer">
              <FolderLockIcon
              :stroke-width="2.2"
              :size="32"
              class=" pb-1.5 inline"
              target="_blank"
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
