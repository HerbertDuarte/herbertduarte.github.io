<script setup>
import { ChevronsDown } from 'lucide-vue-next';
import ViewTitle from '@/components/ViewTitle.vue';
</script>
<template>
  <section id="home" class="md:pt-36 pt-28">
    <ViewTitle>
      Olá, eu me chamo <span class="text-primary">Herbert</span>. Seja bem
      vindo(a) à minha página de portifólio.
    </ViewTitle>
    <p class="py-12">
      Esse site foi desenvolvido por mim como uma forma de compartilhar meu
      trabalho, minhas experiências, minhas habilidades e um pouco sobre mim.
      Aqui você também encontrará minhas redes sociais, cursos concluídos e meus
      repositórios.
    </p>
    <a href="#about" class="flex justify-center items-center animate-bounce">
      <ChevronsDown :size="56" class="text-primary" />
    </a>
  </section>
</template>
