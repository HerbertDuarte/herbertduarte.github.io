<script setup>
import { MenuIcon, XIcon } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
const menuIsOpen = ref(false);
const mobileMenu = ref(null);
const header = ref(null);
const menuButton = ref(null);

function scrollToSection (sectionId){
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth' // Opção para rolagem suave
    });
  }

  menuIsOpen.value = false;
}
function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value;
}

onMounted(()=>{
  window.addEventListener("click", (e) => {
    if(menuButton.value && menuButton.value.contains(e.target)) {
      toggleMenu();
    }
      
    else if (menuIsOpen.value && !mobileMenu.value.contains(e.target)) {
        menuIsOpen.value = false;
      }
  });
})
</script>

<template>
 <header ref="header" id="header" class="flex justify-center items-center px-12 fixed top-[-2px] z-50 w-full ">
  <div class="flex justify-between py-6 max-w-5xl w-full text-zinc-300">
    <div class="text-purple-600 font-bold font-mono z-20">
      {{'</>'}}
    </div>
    <nav 
       ref="menuButton" class="md:hidden flex">
      <MenuIcon
      v-if="!menuIsOpen"
      :size="26"
      color="white"
      class="cursor-pointer"
      />
      <XIcon
      v-if="menuIsOpen"
      :size="26"
      color="white"
      class="cursor-pointer"
      />
    </nav>
    <nav class="md:flex hidden justify-center items-center  gap-4 text-zinc-100">
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
  </div>
  </header>
  <nav ref="mobileMenu" :class="`md:hidden flex fixed z-40 top-16 left-0 p-8 pt-2 justify-center items-center w-full bg-[#080808] flex-col gap-5 text-zinc-100 transition-all duration-500 border-b border-zinc-800 ${menuIsOpen ? 'translate-y-[0]' : 'translate-y-[-100vh]'}`">
      <a  class="cursor-pointer transition-all duration-500 hover:text-purple-500" @click="scrollToSection('home')">
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
</template>