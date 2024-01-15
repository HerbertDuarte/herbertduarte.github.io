<script setup>
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
 <header class="flex justify-around py-6 fixed top-0 z-50 w-full text-lg text-zinc-300  bg-black">
    <div class="text-purple-600 font-bold font-mono">
      {{'</>'}}
    </div>
    <nav class="flex gap-5 text-zinc-100 z-10">
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
      <a class="cursor-pointer transition-all duration-500 hover:text-purple-500" @click="scrollToSection('contacts')">
        Contatos
      </a>
    </nav>
  </header>
</template>