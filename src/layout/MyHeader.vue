<script setup>
import { MenuIcon, XIcon } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
const menuIsOpen = ref(false);
const mobileMenu = ref(null);
const header = ref(null);
const menuButton = ref(null);

const links = ref([
  {
    name: "Sobre mim",
    path: "about"
  },
  {
    name: "Tecnologias",
    path: "technologies"
  },
  {
    name: "Habilidades",
    path: "skills"
  },
  {
    name: "Projetos",
    path: "projects"
  },
  {
    name: "Contatos",
    path: "footer"
  },
])

function scrollToSection(sectionId) {
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

onMounted(() => {
  window.addEventListener("click", (e) => {
    if (menuButton.value && menuButton.value.contains(e.target)) {
      toggleMenu();
    }

    else if (menuIsOpen.value && !mobileMenu.value.contains(e.target)) {
      menuIsOpen.value = false;
    }
  });
})
</script>

<template>
  <header ref="header" id="header"
    class="bg-main flex md:p-6 p-0 justify-center items-center fixed top-[-2px] z-50 w-full ">
    <div class="flex justify-between items-center max-w-5xl w-full">
      <a href="#home" class="text-primary hover:text-primary-light font-bold font-mono z-20 md:px-6 px-4">
        {{ '</>' }}
      </a>
      <nav ref="menuButton" class="md:hidden flex py-5 pl-7 pr-4 cursor-pointer">
        <MenuIcon v-if="!menuIsOpen" :size="26" />
        <XIcon v-if="menuIsOpen" :size="26" />
      </nav>
      <nav class="md:flex hidden justify-center items-center pr-6 gap-4">
        <a :key="index" v-for="(item, index) in links"
          class="cursor-pointer transition-all duration-500 hover:text-primary" @click="scrollToSection(item.path)">
          {{ item.name }}
        </a>
      </nav>
    </div>
  </header>
  <nav ref="mobileMenu"
    :class="`md:hidden flex fixed z-40 top-16 left-0 p-8 pt-2 justify-center items-center w-full bg-main flex-col gap-5 text-letter transition-all duration-500 border-b border-main-smooth ${menuIsOpen ? 'translate-y-[0]' : 'translate-y-[-100vh]'}`">
    <a :key="index" v-for="(item, index) in links" class="cursor-pointer transition-all duration-500 hover:text-primary"
      @click="scrollToSection(item.path)">
      {{ item.name }}
    </a>
  </nav>
</template>