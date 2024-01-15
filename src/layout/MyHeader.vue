<script setup>
import { MenuIcon, SandwichIcon } from 'lucide-vue-next';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth' // Opção para rolagem suave
    });
  }
};
</script>

<template>
 <header id="header" class="flex justify-center items-center px-12 fixed top-[-2px] z-50 w-full ">
  <div  class="flex justify-between py-6 max-w-5xl w-full text-zinc-300">
    <div class="text-purple-600 font-bold font-mono">
      {{'</>'}}
    </div>
    <nav class="gap-5 text-zinc-100 z-10 md:flex hidden">
      <a class="cursor-pointer transition-all duration-500 hover:text-purple-500" @click="scrollToSection('home')">
        Home
      </a>
      <a class="cursor-pointer transition-all duration-500 hover:text-purple-500" @click="scrollToSection('about')">
        Sobre mim
      </a>
      <a class="cursor-pointer transition-all duration-500 hover:text-purple-500" @click="scrollToSection('skills')">
        Habilidades
      </a>
      <a class="cursor-pointer transition-all duration-500 hover:text-purple-500" @click="scrollToSection('projects')">
        Projetos
      </a>
    </nav>
    <nav class="md:hidden flex">
      <MenuIcon
      :size="26"
      color="white"
      class="cursor-pointer"
      />
    </nav>
  </div>
  </header>
</template>