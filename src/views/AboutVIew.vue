<script setup>
import ViewTitle from '@/components/ViewTitle.vue';
import { DownloadIcon, UserRoundPlusIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
const showDropdown = ref(false);
const button = ref(null);
function handleClick() {
  showDropdown.value = !showDropdown.value;
}

// Close dropdown when click outside

const handleClickOutside = (event) => {
  if (button.value && !button.value.contains(event.target)) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});
</script>
<template>
  <section id="about">
    <ViewTitle> Sobre mim </ViewTitle>

    <p class="py-10 leading-8">
      <UserRoundPlusIcon :stroke-width="2.2" :size="32" class="inline text-primary pb-1.5" />
      Eu me chamo <span class="text-primary">Herbert Duarte</span>, sou
      baiano, tenho 21 anos e resido no município de Vitória da
      Conquista, BA. Sou um entusiasta da tecnologia, apaixonado por exatas e
      estudante de programação. Estou matriculado no curso de Bacharelado em
      <span class="text-primary">Sistemas de Informação</span> no Instituto
      Federal de Educação, Ciência e Tecnologia da Bahia (IFBA). Atualmente atuo como Arquiteto de software e
      Desenvolvedor fullstack
      web.
    </p>

    <div class="flex flex-col gap-8 justify-center items-center">
      <img
        class="w-80 aspect-square object-cover bg-secondary rounded-full rounded-bl-[40rem] shadow-md shadow-secondary/50"
        src="/herbert.png" alt="Foto de perfil de Herbert Duarte" />
      <!-- <a href="/donwloads/cv-herbert-duarte.pdf" download="Currículo Herbert Duarte.pdf"
        class="flex items-center gap-1.5 hover:text-primary group mt-5 pr-2">
        <DownloadIcon class="text-primary pb-0.5 " />
        <p class="group-hover:underline">
          Donwload CV
        </p>
      </a> -->

      <button ref="button" @click="handleClick" class="relative px-4 py-2.5 flex justify-center">

        <span>Baixar Currículo</span>
        <ChevronUpIcon v-show="showDropdown" class="inline ml-2 size-5" />
        <ChevronDownIcon v-show="!showDropdown" class="inline ml-2 size-5" />

        <div v-if="showDropdown" class="bg-zinc-900 rounded-md p-1.5 flex flex-col items-stretch gap-1 mt-10 absolute">
          <a class="py-2 px-3 whitespace-nowrap text-left hover:text-primary transition-all duration-500"
            href="https://docs.google.com/document/d/1xD3qLXELNHdc2V1awa9_ZEwPjAd_cNeviG6fy68tXwU" target="_blank">
            <DownloadIcon class="inline mr-2 size-5" />
            <span>Português brasileiro (PT-BR)</span>
          </a>
          <div class="h-px bg-white/15" />
          <a class="py-2 px-3  whitespace-nowrap text-left hover:text-primary transition-all duration-500"
            href="https://docs.google.com/document/d/1ZXpLK_wcGbiaEC29B5fCXnAuccH-9eAp8EpTEV7ub2s" target="_blank">
            <DownloadIcon class="inline mr-2 size-5" />
            <span>Inglês (EN-US)</span>
          </a>
        </div>
      </button>

    </div>
  </section>
</template>
